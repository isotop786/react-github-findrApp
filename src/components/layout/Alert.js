const Alert = ({alert})=>{
    return(
        <div style={{background:'#ffcc00'}} className={`alert alert-${alert.type}}`}>
           <i className="fas fa-exclamation-triangle"></i> {alert.text}
        </div>
    )
}

export default Alert