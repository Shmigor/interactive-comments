import Plus from '../images/icon-plus.svg';
import Minus from '../images/icon-minus.svg';

function Counter(props) {
    return(
        <div className="counter-container">
            <img className="counter-container-plus" src={Plus} alt="plus"/>
            <span className="counter-container-number">{props.score}</span>
            <img className="counter-container-minus" src={Minus} alt="minus"/>
        </div>
    )
}

export default Counter;