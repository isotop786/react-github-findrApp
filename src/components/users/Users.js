import React,{Component} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users = ({users,loading})=>{
    
    if(loading){
        return <Spinner/>
        // return <LoadingComp/>
        
    }else{
        return(
            <div  style={userStyle}>
                {users.length > 0 && users.map(user =>(
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