import {
   ON_USERS_LOADED,
    ON_ADD_TO_BAD
} from '../action-types'

const initialState = {
    users :[],
    bad_Employees:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_USERS_LOADED: {
            return {
                ...state,
                users: action.payload
            }
        }
        case ON_ADD_TO_BAD: {
            return {
                ...state,
                bad_Employees: [...state.bad_Employees,action.payload]
            }
        }
     
        default :
            return state
    }
}
export default reducer
