import React, {Component,useState,useEffect} from 'react' 
import PropTypes from 'prop-types'
import Alert from '../layout/Alert';
import {useContext} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ()=>{
   
    const alertContext = useContext(AlertContext)
    const githubContext = useContext(GithubContext)
    
    const [text,setText] = useState('')
    // const [dis, setDis] = useState(false)

    const {alert,setAlert} = alertContext;


    
    const onChange = (e)=> setText(e.target.value)

    const onSubmit = (e)=>{
        e.preventDefault();
  

            if(text !==''){
            
            githubContext.searchUsers(text)
            // searchUser(text)

            setText('')

            }else{
                setAlert('Plese input a username','danger')
            }
    }

        
        return(
            <div>
                {alert && <Alert/>}
                <form className='form' onSubmit={onSubmit}>  
                    <input type="text" name="text" placeholder="Search Users..." id="" 
                    value={text} onChange={onChange}
                    />
                 
                    <input type="submit" value='Search'
                    className='btn btn-block btn-dark'
                    />
                </form>
                {githubContext.users.length >0  && <button className="btn btn-block btn-success" onClick={()=> githubContext.clearUsers()}>Clear</button>}

            </div>
        )
    }   



Search.propTypes = {
    
    alert: PropTypes.object
}

export default Search;