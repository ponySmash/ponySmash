import { CharListAndNull, ListName } from './types';
import './css/CharactersPreviewCount.css';

function getCharsCount(isLoadingList: boolean, listType: ListName, OG_LIST: CharListAndNull, filteredList: CharListAndNull) {
    if (isLoadingList) return 'Loading...';
    switch (listType) {
        case 'custom': {
            if (OG_LIST == null || OG_LIST.length === 0 || filteredList == null || filteredList.length === 0)
                return 'Not loaded/0';

            return `${filteredList.length}/${OG_LIST.length}`;
        }
        default: {
            if (OG_LIST == null) return '???/???';
            if (filteredList == null) return '???/???';
            return `${filteredList.length}/${OG_LIST.length}`;
        }
    }
}

export function CharactersPreviewCount(props:
    {
        isLoadingList: boolean,
        listType: ListName,
        OG_LIST: CharListAndNull,
        filteredList: CharListAndNull
    }) {
    return (
        <>
            <p id="characters-preview-count">Characters: {getCharsCount(props.isLoadingList, props.listType, props.OG_LIST, props.filteredList)}</p>
            <br />
        </>
    );
}
export default CharactersPreviewCount;
