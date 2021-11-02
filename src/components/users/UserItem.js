import PropTypes from 'prop-types'

const UserItem = ({user})=> {


 
        const {login, avatar_url,html_url} = user


        return(
            <div className="card text-center">
                <img src={avatar_url} alt="" style={{width:"60px"}} className="round-img"/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-sm btn-dark my-1">More</a>
                </div>
            </div>
        )
    }


UserItem.prototype = {
    user: PropTypes.object
}

export default UserItem