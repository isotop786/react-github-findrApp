
const RepoItem = ({repo})=>{

    return(
        <div className="card border-1">
            <h3>{repo.name}</h3>
            <h5 className="badge badge-primary">{repo.full_name}</h5>
            <div className="fd">
            <div>
               
            
            {repo.description && (
                    <p><strong>Description: </strong>{repo.description}</p>
                )}
            {repo.language && (
                    <p><strong>Programming Language: </strong>{repo.language}</p>
                )}
              
            </div>
            
            <div style={{marginLeft:'auto'}}>
            <a className="btn btn-danger" 
            style={{ borderRadius:'5px'}}
            href={repo.html_url} target="_blank">Visit</a>
            </div>
            </div>
           
            <style jsx>
            {`
            .border-1{
                
               
            }
            .border-1:hover{
                box-shadow: 3px 3px 6px 6px #ddd;
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