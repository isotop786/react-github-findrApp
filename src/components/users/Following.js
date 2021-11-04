// import FollowerItem from './FollowerItem'
import FollowingItem from "./FollowingItem";


const Following = ({followings}) =>{
    return (
        <div className="gr">
            <h2>Following</h2>
            {followings.map(following=>(
                <FollowingItem following={following}/>
            ))}

            <style jsx>{`
                .gr{
                    display:grid;
                    grid-gap:1rem;
                    grid-template-columns: repeat(3, 1fr);
                    justify-content:evenly;
                }
            `}</style>
        </div>
    )
}


export default Following;