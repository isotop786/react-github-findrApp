import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext'
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    REMOVE_ALERT,
    SET_LOADING,
    LOAD_USERS,
    GET_FOLLOWERS,
    GET_FOLLOWINGS
} from '../types'


const GithubState = props => {
    const initialState = {
        users:[],
        user: {},
        repos: [],
        loading: false,
        alert:{},
        followers:[],
        followings:[]
    }

    const [state, dispatch ] = useReducer(GithubReducer, initialState);



    // loading default Users
    const loadUsers =  ()=>{
       
        setLoading()
        axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}
        , {
          headers: {
              'Authorization': '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',
          }
        `)
        .then((res)=>{
            
            dispatch({
                type: LOAD_USERS,
                payload: res.data
            })

          
           
        })
        .catch(err=>{
          console.log(err)
        })
    }


    // Search Users

    const  searchUsers = async  (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    
      }

    // Get User
    const getUser = async (username)=>{
    const res = await axios.get(`https://api.github.com/users/${username}`)
    dispatch({
        type: GET_USER,
        payload: res.data
    })
  }

    // Get Repos 
    const getRepos = async username => {
   
        setLoading(true)
       const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=created_at`)
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
      }

    // Clear Users
    const clearUsers = ()=> dispatch({type:CLEAR_USERS})

    // Set Alert
    const setAlert =(text,type)=> {
         
        dispatch({
            type:SET_ALERT,
            payload:{text,type}
        })
     }

    //  Get Followers
    // const getFollowers = ()=> dispatch({type: GET_FOLLOWERS })
    const getFollower = async username =>{
    
        const res = await axios.get(`https://api.github.com/users/${username}/followers`)
        dispatch({
            type:GET_FOLLOWERS,
            payload:res.data
        })
      }


    

    // Set Loading
    const setLoading = ()=> dispatch({type: SET_LOADING})

    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUsers,
        clearUsers,
        loadUsers,
        getUser,
        getRepos,
        setAlert,
        followers: state.followers,
        getFollower,
    }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;




