import React, {Component,useState,useEffect} from 'react' 
import PropTypes from 'prop-types'
import Alert from '../layout/Alert';

const Search = ({searchUser,setAlert,userLoaded,clearUsers})=>{
   
    const [text,setText] = useState()
    const [dis, setDis] = useState(false)

    
    const onChange = (e)=> setText(e.target.value)

    const onSubmit = (e)=>{
        e.preventDefault();
  

            if(text !== ''){
            
            searchUser(text)

            setText('')

            }else{
                setAlert('Plese input a username','danger')
            }
    }

        
        return(
            <div>
      
                <form className='form' onSubmit={onSubmit}>  
                    <input type="text" name="text" placeholder="Search Users..." id="" 
                    value={text} onChange={onChange}
                    />
                 
                    <input type="submit" value='Search'
                    className={`btn btn-block ${userLoaded ? 'btn-primary ': 'btn-dark '}`}
                    />
                </form>
                {userLoaded && <button className="btn btn-block btn-success" onClick={()=> clearUsers()}>Clear</button>}

            </div>
        )
    }   



Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    alert: PropTypes.object
}

export default Search;