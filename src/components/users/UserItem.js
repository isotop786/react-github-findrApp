import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Single from './Single'
import App from '../../App';

const UserItem = ({user})=> {


 
        const {login, avatar_url,html_url} = user


        return(
           
                <div className="card text-center">
                    <img src={avatar_url} alt="" style={{width:"60px"}} className="round-img"/>
                    <h3>{login}</h3>
                    <div>
                        <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">More</Link>
                    </div>
                </div>

         
        )
    }


UserItem.prototype = {
    user: PropTypes.object
}

export default UserItem