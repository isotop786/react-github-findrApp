const FollowingItem = ({following})=>{

    return(
        <div className="card text-center">
        <img src={following.avatar_url} alt="" style={{width:"60px"}} className="round-img"/>
        <h3>{following.login}</h3>
        <div>
       
            <a  href={`/user/${following.login}`} className="btn btn-sm btn-dark my-1">Profile</a>
        </div>
    </div>
    )
}

export default FollowingItem;