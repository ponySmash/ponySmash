import { useEffect, useMemo } from 'react';
import { EventDecorationsData, StateSet } from '../types';

export function StarWars(props: {
    dataSet: StateSet<EventDecorationsData>
}) {
    const imgList = [
        'fluttershy',
        'starlight'
    ];

    const img = useMemo(() => imgList[Math.floor(Math.random() * imgList.length)], []);

    useEffect(() => {
        props.dataSet({ imgName: img });
    }, [img]);

    return (<>
        <img className='starWars' src={`./images/starWars/${img}.webp`}></img>
    </>);
}
