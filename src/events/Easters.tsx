import React, { useEffect, useMemo } from 'react';
import { EventEastersData, StateSet } from '../types';

export function Easters(props: {
    dataSet: StateSet<object | EventEastersData>
}) {
    const imgList = [
        'applejack',
        'derpy',
        'fluttershy2',
        'fluttershy',
        'pinkie',
        'rainbow',
        'rarity',
        'twilight'
    ];

    const img = useMemo(() => imgList[Math.floor(Math.random() * imgList.length)], []);

    useEffect(() => {
        props.dataSet({ imgName: img });
    }, [img]);

    return (<>
        <img className='easter-pony' src={`./images/easter/${img}.webp`}></img>
    </>);
}
