import React from 'react';
import { Character, List, ListName, Ref } from './types';
import PonyContainer from './PonyContainer';
import Lists from './Lists';

function EndScreen(props: {
    smashes: Ref<Character[]>,
    list: Ref<Character[]>,
    listType: Ref<ListName>
}) {
    const list = Lists[props.listType.current] as List;
    const shameText = list.getShameText?.(props.smashes.current, props.list.current);

    return (
        <>
            <p className='pony-name'>Its over!, You would smash{props.smashes.current.filter((e) => e.filly === true).length > 0 ? ' or call cute ' : ''} {props.smashes.current.length} out of {props.list.current.length} characters.</p>
            {
                (() => {
                    switch (props.listType.current) {
                        case 'custom': return null;
                        default: {
                            return (<>
                                {
                                    shameText !== '' && typeof shameText != 'undefined' && shameText != null ? (<>
                                        <p className='pony-name'>{shameText}</p>
                                        <br /></>) : null}
                                <p>If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)</p>
                            </>);
                        }
                    }
                })()
            }
            <PonyContainer smashes={props.smashes} />
        </>
    );
}

export default EndScreen;
