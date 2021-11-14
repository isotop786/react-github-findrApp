import React,{Component, useContext,useEffect} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';


const Users = ()=>{
    
    const githubContext = useContext(GithubContext);

    const {loading,users,loadUsers} = githubContext;

    useEffect(()=>{
        loadUsers();
    },[])

    if(loading){
        return <Spinner/>
        // return <LoadingComp/>
        
    }else{
        return(
            <div  style={userStyle}>
                {users !==null && users.map(user =>(
                    <UserItem key={user.id} user={user}/>
                )) }
            </div>
        )
    }
  
       
    }

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}




const userStyle ={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem',
    justifyContent:'evenly'
}

export default Users;