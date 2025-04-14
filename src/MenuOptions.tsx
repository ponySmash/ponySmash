import { CharListAndNull, ListName, ListProps, Ref, StateSet } from './types';
import DynamicOptions from './DynamicOptions';
import CustomOptions from './CustomOptions';
import './css/MenuOptions.css';

function MenuOptions(props: {
    listProps: Ref<ListProps>,
    listType: Ref<ListName>,
    isLoadingList: boolean,
    setIsLoadingList: StateSet<boolean>,
    OG_LIST: Ref<CharListAndNull>,
    filteredList: CharListAndNull,
    setFilteredList: StateSet<CharListAndNull>
}) {
    return (
        <>
            <div id="menu-options">
                {
                    props.listType.current == 'custom' ? (<CustomOptions key='customOptions' {...props} />) : null
                }
                <DynamicOptions key='dynamicOptions' {...props} />
            </div>
            <br />
        </>
    );
}

export default MenuOptions;
