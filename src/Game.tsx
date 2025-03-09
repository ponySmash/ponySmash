import React, { useState } from 'react';
import { Character, GameState, ListName, Ref, StateSet } from './types';
import ButtonsHolder from './ButtonsHolder';
import ReactGA from 'react-ga4';

import './css/Game.css';

function Game(props: {
    list: Ref<Character[]>,
    setGameState: StateSet<GameState>,
    smashes: Ref<Character[]>,
    listName: ListName
}) {
    const [i, setI] = useState(0);
    const IMG_CACHE_SIZE = 20;

    // Return true if there is no next character
    function endingHandler(): boolean {
        if (i === props.list.current.length - 1) {
            props.setGameState('end');

            (async () => {
                ReactGA.event('level_end', { level_name: props.listName, smashes: props.smashes.current.map((c) => c.name), numSmashes: props.smashes.current.length, numList: props.list.current.length });
            })();

            return true;
        }
        return false;
    }

    function smashClick(_ev?: React.MouseEvent<HTMLElement>): boolean {
        props.smashes.current.push(props.list.current[i]);

        if (endingHandler()) return false;
        (async () => {
            ReactGA.event('smash', { character: props.list.current[i].name, listName: props.listName });
        })();
        setI(i + 1);
        return true;
    }

    function passClick(_ev?: React.MouseEvent<HTMLElement>) {
        if (endingHandler()) return false;
        (async () => {
            ReactGA.event('pass', { character: props.list.current[i].name, listName: props.listName });
        })();
        setI(i + 1);
        return true;
    }

    return (<>
        <ButtonsHolder character={props.list.current[i]} smashClick={smashClick} passClick={passClick} />
        <br></br>
        <div className='progress-display'>{i + 1}/{props.list.current.length}</div>
        <p className='pony-name'>{props.list.current[i].name}</p>
        <img className='game-img' alt={props.list.current[i].name} src={props.list.current[i].img} fetchPriority='high'></img>
        {
            props.list.current.slice(i + 1, i + 1 + IMG_CACHE_SIZE).map((c, ci) => (
                <img key={c.name} src={c.img} alt='' className='cached-img' fetchPriority={ci == 0 ? 'high' : 'low'} ></img>
            ))
        }
    </>);
}

export default Game;
