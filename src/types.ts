import Lists from './Lists';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        fetchPriority?: 'high' | 'low' | 'auto';
    }
}


export interface CORSProxyResponse {
    contents: string | null;
    status: {
        url: string,
        content_type: string,
        http_code: number,
        response_time: number,
        content_length: number
    };
}

export interface Character {
    name: string;
    img: string;
    filly?: boolean;
    eqg?: boolean;
    gender?: 'female' | 'male' | null;
    community?: boolean;
    smashText?: string;
    passText?: string;
}

export type EventDecorations = 'none' | 'starWars' | 'valentines' | 'aprilFools' | 'xmas' | 'halloween' | 'newYear' | 'bday' | 'easters' | 'blazeIt';

export interface EventEastersData {
    imgName: string;
}

export interface EventStarWarsData {
    imgName: string;
}

export type StateSet<T> = React.Dispatch<React.SetStateAction<T>>;
export type Ref<T> = React.MutableRefObject<T>;

export type CharListAndNull = Character[] | null;
export type GameState = 'menu' | 'ingame' | 'end';

export interface ListExtension {
    list: string;
    filters?: FiltersAlwaysOff;
}

export type ListExtensions = Record<string, ListExtension>;

export interface List extends ListProps {
    readonly name: string;
    readonly list: Character[];
    // readonly filters?: Filters;
    // readonly extensions?: ListExtensions;
    /**
     * @param smashes Array of characters the user chose smash
     * @param list Array of characters of the list, excluding filtered ones
     * @returns A text to display at game's end screen
     */
    getShameText?: (smashes: Character[], list: Character[]) => string;
    version?: number;
}

export type FilterLogicTypeNoArg = 'equals' | 'notEquals';
export type FilterLogicTypeWithArg = 'startsWith' | 'endsWith' | 'includes';

export interface FilterLogicNoArg {
    type: FilterLogicTypeNoArg;
    charProp: keyof Character;
    against: boolean | string | number | null;
}


export interface FilterLogicWithArg {
    type: FilterLogicTypeWithArg;
    charProp: keyof Character;
    arg: string;
    against: boolean | string | number | null;
}

export interface FilterLogicInList {
    type: 'inList';
    charProp: keyof Character;
    against: string; // TODO: Make this a type of ListName without circular dependency
}

export interface Filter {
    readonly text: string;
    readonly logic: FilterLogicNoArg | FilterLogicWithArg | FilterLogicInList;
    value: boolean; // Enabled or disabled
}

export interface ListProps {
    filters: Filters;
    extensions: ListExtensions;
}

export type ListName = keyof (typeof Lists);
export type Filters = Record<string, Filter>;

export type FiltersAlwaysOff = Record<string, Omit<Filter, 'value'> & { value: false }>;
