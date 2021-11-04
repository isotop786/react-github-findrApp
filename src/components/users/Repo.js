import RepoItem from "./RepoItem";

const Repo = ({repos})=>{

    return(
        <div className="card">
            <h2>Repositories</h2>
            {repos && repos.map(r=>(
                 <RepoItem repo={r}/>
            ))}
           
        </div>
    )
}


export default Repo;