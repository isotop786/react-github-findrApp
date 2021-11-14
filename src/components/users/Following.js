// import FollowerItem from './FollowerItem'
import FollowingItem from "./FollowingItem";


const Following = ({fprops,title}) =>{
    return (
        <div className="gr">
            <h2>{title}</h2>
            {fprops.map(following=>(
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