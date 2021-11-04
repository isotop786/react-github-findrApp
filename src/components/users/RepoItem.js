
const RepoItem = ({repo})=>{

    return(
        <div className="card border-1">
            <h3>{repo.name}</h3>
            <h5 className="badge badge-primary">{repo.full_name}</h5>
            <div className="fd">
            <p><strong>Description: </strong>{repo.description}</p>
            <a className="btn btn-danger" 
            style={{marginLeft:'auto', borderRadius:'5px'}}
            href={repo.html_url} target="_blank">Visit</a>
            </div>
           
            <style jsx>
            {`
            .border-1{
                
               
            }
            .border-1:hover{
                box-shadow: 3px 3px 3px 3px #eee;
            }

            .fd{
                display:flex;
            }
            
            `}
            </style>
        </div>
    )
}

export default RepoItem;