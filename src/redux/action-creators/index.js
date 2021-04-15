import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RESET_TWO,
    ON_USERS_LOADED,
    ON_ADD_TO_BAD,
    ON_REMOVE_FROM_BAD,
} from '../action-types'

const incAction = () => ({type: INC})
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})

const incAction_two = () => ({type: INC_TWO})
const incCustomAction_two = (payload) => ({type: INC_CUSTOM_TWO, payload})
const decAction_two = () => ({type: DEC_TWO})
const resetAction_two = () => ({type: RESET_TWO})

const onUserLoaded= (payload) => ({type: ON_USERS_LOADED, payload})
const onAddToBad= (payload) => ({type: ON_ADD_TO_BAD, payload})
const onRemoveFromBad= (payload) => ({type: ON_REMOVE_FROM_BAD, payload})

export {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    incAction_two,
    incCustomAction_two,
    decAction_two,
    resetAction_two,
    onUserLoaded,
    onAddToBad,
    onRemoveFromBad
} 
