import React from 'react';
import { CORSProxyResponse, CharListAndNull, Character, Filters, List, StateSet, ListName } from './types';
import Lists from './Lists.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getJSON(url: string, callback: (status: number | null, data: CORSProxyResponse | any) => void) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        callback(status, xhr.response);
    };
    xhr.onerror = () => {
        callback(0, '');
    };
    xhr.send();
}


export function filterList(data: CharListAndNull, setFilteredOrderedList: StateSet<CharListAndNull>, filters: Filters) {
    if (data == null) return;
    setFilteredOrderedList(data.filter((character) => {
        for (const filterId in filters) {
            let retVal = true;
            const { logic, value } = filters[filterId];
            const charProp = character[logic.charProp];

            if (value) continue; // Filter is enabled. Dont check for negative matches
            if (typeof charProp == 'undefined') continue; // The prop is undefined. Ignore this pass

            switch (logic.type) {
                case 'equals': retVal = charProp == logic.against; break;
                case 'notEquals': retVal = charProp != logic.against; break;
                case 'startsWith': retVal = (charProp == null) ? true : (charProp.toString().startsWith(logic.arg) == logic.against); break;
                case 'endsWith': retVal = (charProp == null) ? true : (charProp.toString().endsWith(logic.arg) == logic.against); break;
                case 'includes': retVal = (charProp == null) ? true : (charProp.toString().includes(logic.arg) == logic.against); break;
                case 'inList': {
                    if (!Object.keys(Lists).includes(logic.against)) {
                        const msg = `List "${logic.against}" not found in filter "${filterId}". Ignoring filter`;
                        alert(msg);
                        console.warn(msg);
                        // Mark the filter as "enabled" so it gets ignored
                        filters[filterId].value = true;
                        return true;
                    }
                    const i = Lists[logic.against as ListName].list.findIndex((bc) => bc[logic.charProp] === charProp);

                    const isInList = i >= 0;
                    retVal = isInList;
                }
            }

            retVal = !retVal;

            if (retVal == false) return false;
        }
        return true;
    }));
}


export function loadCustomList(list: Character[] | List, OG_LIST: React.MutableRefObject<CharListAndNull>, setFilteredOrderedList: StateSet<CharListAndNull>, filters: React.MutableRefObject<Filters>) {
    if (Array.isArray(list)) {
        console.log(`Loading legacy custom list with ${list.length} characters`);
        OG_LIST.current = list;
        setFilteredOrderedList(list);
    } else {
        console.log(`Loading custom list with version ${list.version ?? 1}`);
        switch (list.version ?? 1) {
            case 1: {
                OG_LIST.current = list.list;
                filters.current = list.filters ?? {};
                filterList(list.list, setFilteredOrderedList, filters.current);
                break;
            }
        }
    }
}
