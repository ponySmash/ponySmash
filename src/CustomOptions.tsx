import React, { useState } from 'react';
import { CORSProxyResponse, CharListAndNull, ListProps, StateSet } from './types';
import { getJSON, loadList } from './util';
import ReactGA from 'react-ga4';

function customListSubmitHandler(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    listProps: React.MutableRefObject<ListProps>,
    setFilteredList: StateSet<CharListAndNull>,
    setIsLoadingList: StateSet<boolean>,
    isLoadingList: boolean
}, customListURL: string, useCORSProxy: boolean) {
    props.OG_LIST.current = null;
    props.setFilteredList(null);
    if (props.isLoadingList === true) return; // Load the first list first

    (async () => {
        ReactGA.event('load_custom_list', { url: customListURL, cors: useCORSProxy });
    })();

    if (useCORSProxy) {
        console.log(`Loading custom list "${customListURL}" with CORS proxy`);
        getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(customListURL)}`, (status, data: CORSProxyResponse | null) => {
            if (!status?.toString().startsWith('2')) {
                const errorStr = `CORS Proxy code: ${status}\n`;
                alert('Something went wrong... \n' + errorStr);
            } else {
                try {
                    if (data == null) throw 'CORS Proxy returned invalid JSON';
                    if (data.contents == null) throw 'Content is null';
                    try {
                        JSON.parse(data.contents);
                    } catch (error) {
                        console.error(error);
                        throw 'Content is invalid JSON';
                    }

                    loadList(JSON.parse(data.contents), props.OG_LIST, props.setFilteredList, props.listProps, 'custom');
                } catch (e) {
                    if (e)
                        alert(e);
                    else
                        alert('Something went wrong D:');
                }
            }
            props.setIsLoadingList(false);
        });
    } else {
        console.log(`Loading custom list "${customListURL}" without CORS proxy`);
        getJSON(customListURL, (status, data) => {
            if (status === 0 && data === '') {
                alert('Request failed (probably blocked by CORS)\nEnable CORS Proxy just in case');
                props.setIsLoadingList(false);
                return;
            }
            if (!status?.toString().startsWith('2')) {
                const errorStr = `HTTP status code: ${status}\n`;
                alert('Something went wrong... \n' + errorStr);
            }

            loadList(data, props.OG_LIST, props.setFilteredList, props.listProps, 'custom');
            props.setIsLoadingList(false);
        });
    }
    props.setIsLoadingList(true);
}


function CustomOptions(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    listProps: React.MutableRefObject<ListProps>,
    setFilteredList: StateSet<CharListAndNull>,
    setIsLoadingList: StateSet<boolean>,
    isLoadingList: boolean
}) {
    const [customListURL, setCustomListURL] = useState('');
    const [useCORSProxy, setUseCORSProxy] = useState(true);

    function customListURLKeyUp(ev: React.KeyboardEvent<HTMLInputElement>) {
        if (ev.repeat)
            return;
        if (ev.key === 'Enter')
            customListSubmitHandler(props, customListURL, useCORSProxy);
    }

    return (<>
        <input key='input' placeholder="URL to JSON list" id='input' defaultValue={customListURL} onChange={(ev) => setCustomListURL(ev.target.value)} onKeyUp={customListURLKeyUp} />
        <button onClick={() => customListSubmitHandler(props, customListURL, useCORSProxy)}>Load</button>
        <br />
        <p title="CORS Proxy is needed for sites that dont allow other sites accessing their data (eg: pastebin). However it comes at the cost of relying on the proxy of actually working">
            <u>Use CORS Proxy?</u>
            <input key='use-cors' checked={useCORSProxy} type="checkbox" onChange={(ev) => setUseCORSProxy(ev.target.checked)}></input>
        </p>
        <br />
        <a href="https://github.com/ponySmash/ponySmash/wiki/Custom-Lists" target="_blank">What is this?</a>
    </>);
}

export default CustomOptions;
