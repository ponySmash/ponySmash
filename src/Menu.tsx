import React, { useRef, useState } from 'react';
import { CharListAndNull, Character, GameState, ListName, ListProps, Ref, StateSet } from './types';
import { loadList } from './util';
import CharactersPreviewCount from './CharactersPreviewCount';
import ListType from './ListType';
import MenuOptions from './MenuOptions';
import Lists from './Lists';
import './css/Menu.css';

function Menu(props:
    {
        listType: Ref<ListName>,
        finalList: Ref<Character[]>,
        setGameState: StateSet<GameState>
    }) {
    const [isLoadingList, setIsLoadingList] = useState(false);
    const OG_LIST = useRef<CharListAndNull>(Lists[props.listType.current].list);

    const listProps = useRef<ListProps>({
        filters: Lists[props.listType.current].filters,
        extensions: Lists[props.listType.current].extensions
    });

    const [filteredList, setFilteredList] = useState<CharListAndNull>(() => {
        const loadedList = loadList(Lists[props.listType.current], OG_LIST, null, listProps, props.listType.current);
        return loadedList;
    });

    function startButtonClick(_ev: React.MouseEvent<HTMLButtonElement>) {
        if (filteredList != null) {
            props.finalList.current = filteredList.sort((_a, _b) => 0.5 - Math.random());
            props.setGameState('ingame');
        }
    }

    const MenuOptionsProps = {
        listType: props.listType,
        isLoadingList: isLoadingList,
        setIsLoadingList: setIsLoadingList,
        OG_LIST: OG_LIST,
        filteredList: filteredList,
        setFilteredList: setFilteredList
    };

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>

            <ListType key='listType' setFilteredList={setFilteredList} listType={props.listType} OG_LIST={OG_LIST} listProps={listProps} />
            <MenuOptions key='menu-options' listProps={listProps} {...MenuOptionsProps} />
            <CharactersPreviewCount isLoadingList={isLoadingList} listType={props.listType.current} OG_LIST={OG_LIST.current} filteredList={filteredList} />
            <br />
            <button id="start" className="start-button" disabled={filteredList == null || filteredList.length === 0} onClick={startButtonClick}>Start</button>
        </>
    );
}

export default Menu;
