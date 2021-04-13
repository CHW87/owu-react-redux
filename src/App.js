import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    incAction_two,
    incCustomAction_two,
    decAction_two,
    resetAction_two,
} from './redux/action-creators'

function App() {
    const counter1 = useSelector(({counter1: {counter}})=> {
        return counter
    }) 
    const counter2 = useSelector(({counter2: {counter}})=> {
        return counter
    })

    const dispatch = useDispatch()
    return (
        <div className="App">
            <h1>{counter1}-1</h1>
            <button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>
            <button onClick={() => dispatch(incAction())}>inc</button>
            <button onClick={() => dispatch(decAction())}>dec</button>
            <button onClick={() => dispatch(resetAction())}>reset</button>
            <h1>{counter2}-2</h1>
            <button onClick={() => dispatch(incCustomAction_two(10))}>inc custom</button>
            <button onClick={() => dispatch(incAction_two())}>inc</button>
            <button onClick={() => dispatch(decAction_two())}>dec</button>
            <button onClick={() => dispatch(resetAction_two())}>reset</button>
        </div>
    );
}

export default App;
