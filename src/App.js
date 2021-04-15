import React from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    incAction_two ,
    incCustomAction_two,
    decAction_two,
    resetAction_two,
    onUserLoaded,
    onAddToBad
} from './redux/action-creators'

const PhotosList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users)
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees)
    const fetchPhotos = async () => {
        const response = await fetch('https://dummyapi.io/data/api/user?limit=10', {
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        })
        const json = await response.json();
        dispatch(onUserLoaded(json.data))

    }
    React.useEffect(() => {
        if (!users.length) {
            fetchPhotos()
        }

    }, [])
    return (

        <div>
            {users.map(el => (
                <img 
                    style={{
                        filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''
                    }}
                    onClick={() => dispatch (onAddToBad(el.id))} 
                    key={el.id} 
                    src={el.picture} 
                    alt={el.firstName}/>
            ))
            }
        </div>
    )
}

function App() {
    const counter1 = useSelector(({counter1: {counter}}) => {
        return counter
    })
    const counter2 = useSelector(({counter2: {counter}}) => {
        return counter
    })

    const dispatch = useDispatch()
    return (
        <div className="App">
            {!!(counter1 % 2) && <PhotosList/>}
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
