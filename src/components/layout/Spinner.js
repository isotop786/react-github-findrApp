import SpinnerGif from './spinner.gif'
import React,{Fragment} from 'react'
const Spinner = ()=>{
    return(
        <Fragment className="text-center" >
            <img src={SpinnerGif} alt="" style={SpinnerStyle}/>
        </Fragment>
    )
}

const SpinnerStyle = {
    width:'200px',
    margin:'auto',
    display:'block',
    background:'#eee'
}


export default Spinner