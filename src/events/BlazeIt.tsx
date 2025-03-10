import React, { useEffect, useMemo } from 'react';
import { EventDecorationsData, StateSet } from '../types';

export function BlazeIt(props: {
    dataSet: StateSet<EventDecorationsData>
}) {
    const imgList = [
        'blazeIt1',
        'blazeIt2'
    ];

    const img = useMemo(() => imgList[Math.floor(Math.random() * imgList.length)], []);

    useEffect(() => {
        props.dataSet({ imgName: img });
    }, [img]);

    return (<>
        <img className='easter-pony' src={`./images/${img}.webp`}></img>
    </>);
}
