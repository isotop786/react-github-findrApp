import FollowerItem from './FollowerItem'

const Followers = ({fprops,title}) =>{
    return (
        <>
        <div className="text-center my-1">
            <h2>{title}</h2>
        </div>
       
        <div className="gr">
            {fprops.map(fprop=>(
                <FollowerItem fprop={fprop}/>
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
        </>
    )
}


export default Followers;