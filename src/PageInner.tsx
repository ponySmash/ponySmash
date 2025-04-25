import { useRef, useState } from 'react';
import EndScreen from './EndScreen';
import Game from './Game';
import Menu from './Menu';
import { Character, GameState, ListName } from './types';
import './css/PageInner.css';

function PageInner() {
    const smashes = useRef<Character[]>([]);
    const [gameState, setGameState] = useState<GameState>('menu');

    const listType = useRef<ListName>('default');
    const finalList = useRef<Character[]>([]);

    return (
        <div key='page-inner' className="page-inner" style={gameState === 'end' ? { overflowY: 'scroll', display: 'inline-grid', justifyItems: 'center' } : {}}>
            {
                (() => {
                    switch (gameState) {
                        case 'menu': return (<Menu key='menu' setGameState={setGameState} finalList={finalList} listType={listType} />);
                        case 'ingame': return (<Game key='game' list={finalList} setGameState={setGameState} smashes={smashes} listName={listType.current} />);
                        case 'end': return (<EndScreen key='endscreen' smashes={smashes} list={finalList} listType={listType} />);
                    }
                })()
            }
        </div>
    );
}

export default PageInner;
