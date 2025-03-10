import React from 'react';

import { EventDecorations, EventDecorationsData, Ref, StateSet } from './types';
import { EasterDate } from './util';

import { AprilFools } from './events/AprilFools';
import { Halloween } from './events/Halloween';
import { StarWars } from './events/StarWars';
import { Christmas } from './events/Christmas';
import { NewYear } from './events/NewYear';
import { BDay } from './events/BDay';
import { Easters } from './events/Easters';
import { Valentines } from './events/Valentines';
import { BlazeIt } from './events/BlazeIt';


export function Events(props: {
    eventDecoration: Ref<EventDecorations>,
    eventDataSet: StateSet<EventDecorationsData>
}) {
    const date = new Date();

    // April 1
    if ((date.getMonth() == 3 && date.getDate() == 1))
        props.eventDecoration.current = 'aprilFools';

    // October 1-November 1
    if ((date.getMonth() == 9) || (date.getMonth() == 10 && date.getDate() == 1))
        props.eventDecoration.current = 'halloween';

    // December 25
    if (date.getMonth() == 11 && (date.getDate() == 24 || date.getDate() == 25))
        props.eventDecoration.current = 'xmas';

    // December 31 / January 1
    if ((date.getMonth() == 11 && date.getDate() == 31) || (date.getMonth() == 0 && date.getDate() == 1))
        props.eventDecoration.current = 'newYear';

    // October 10
    if ((date.getMonth() == 9 && date.getDate() == 10))
        props.eventDecoration.current = 'bday';

    // February 14
    if ((date.getMonth() == 1 && date.getDate() == 14))
        props.eventDecoration.current = 'valentines';

    // May 4
    if ((date.getMonth() == 4 && date.getDate() == 4))
        props.eventDecoration.current = 'starWars';

    // April 20
    if ((date.getMonth() == 3 && date.getDate() == 20))
        props.eventDecoration.current = 'blazeIt';

    const ed = EasterDate(date.getFullYear());
    if ((date.getMonth() + 1 == ed.month && date.getDate() == ed.day)) {
        props.eventDecoration.current = 'easters';
    }

    return (
        <>
            {
                (() => {
                    switch (props.eventDecoration.current) {
                        case 'aprilFools': return <AprilFools />;
                        case 'halloween': return <Halloween />;
                        case 'xmas': return <Christmas />;
                        case 'newYear': return <NewYear />;
                        case 'bday': return <BDay />;
                        case 'valentines': return <Valentines />;
                        case 'easters': return <Easters dataSet={props.eventDataSet} />;
                        case 'starWars': return <StarWars dataSet={props.eventDataSet} />;
                        case 'blazeIt': return <BlazeIt dataSet={props.eventDataSet} />;
                        case 'none': return <></>;
                    }
                })()
            }
        </>
    );
}
