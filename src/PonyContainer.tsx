import { Character, Ref } from './types';
import './css/PonyContainer.css';

function PonyContainer(props: { smashes: Ref<Character[]> }) {
    return (<div className='pony-container'>{
        props.smashes.current.map((c) => (
            <img className='pony-list-img' key={c.name} src={c.img} alt={c.name} title={c.name}></img>
        ))
    }</div>);
}

export default PonyContainer;
