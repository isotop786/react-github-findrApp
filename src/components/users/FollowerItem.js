import { Link } from "react-router-dom";
const FollowerItem = ({fprop})=>{

    return(
        <div className="card text-center uit">
        <img src={fprop.avatar_url} alt="" style={{width:"60px"}} className="round-img"/>
        <h3>{fprop.login}</h3>
        <div>
            <a href={`/user/${fprop.login}`} className="btn btn-sm btn-dark my-1">More</a>
        </div>

        <style jsx>{`
        
        .uit{

        }
        .uit:hover{
            box-shadow: 2px 3px 5px 5px #ccc;
        }

        `}</style>
    </div>
    )
}

export default FollowerItem;