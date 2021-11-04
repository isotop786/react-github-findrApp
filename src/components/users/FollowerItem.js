import { Link } from "react-router-dom";
const FollowerItem = ({fprop})=>{

    return(
        <div className="card text-center">
        <img src={fprop.avatar_url} alt="" style={{width:"60px"}} className="round-img"/>
        <h3>{fprop.login}</h3>
        <div>
            <a href={`/user/${fprop.login}`} className="btn btn-sm btn-dark my-1">More</a>
        </div>
    </div>
    )
}

export default FollowerItem;