import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    REMOVE_ALERT,
    SET_LOADING,
    LOAD_USERS,
    GET_FOLLOWERS
} from '../types'

export default (state,action) => {
    switch(action.type)
    {   

        case GET_FOLLOWERS:
            return{
                ...state,
                followers:action.payload,
                loading:false
            }


        case GET_REPOS:
            return{
                ...state,
                repos:action.payload,
                loading:false
            }


        case GET_USER:
            return{
                ...state,
                user:action.payload,
                loading: false
            }

        case LOAD_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false
            }


        case CLEAR_USERS:
            return{
                ...state,
                users: [],
                loading:false
            }


        case SEARCH_USERS:
            console.log('Searching Users...')
            return{
                ...state,
                users: action.payload,
                loading:false
            }

        case SET_LOADING:
            return{
                ...state,
                loading:true
            }

        default:
            return state;
    }
}