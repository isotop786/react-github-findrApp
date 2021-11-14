import { useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = ()=>{
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext;
   
    return(
        <div style={{background:'#ffcc00'}} className={`alert alert-${alert.type}}`}>
           <i className="fas fa-exclamation-triangle"></i> {alert.text}
        </div>
    )
}

export default Alert