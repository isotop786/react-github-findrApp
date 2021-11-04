import React, {Component} from 'react' 
import PropTypes from 'prop-types'
import Alert from '../layout/Alert';

class Search extends Component{
    state ={
        text: '',
        dis:false
    }

    

    onChange = (e)=>{
        this.setState({text:e.target.value}) 
        // this.props.userLoaded = false
    } 
  
    onSubmit = (e)=>{
        e.preventDefault();
  

            if(this.state.text !== ''){
            
            this.props.searchUser(this.state.text)
            this.setState({text: ''})
            }else{

                this.props.setAlert('Plese input a username','danger')
              
            }

    // }
    }

    render(){
        const {userLoaded} = this.props
        const {clearUsers} = this.props
        
        
        return(
            <div>
                {/* {alert !== null && <Alert alert={alert}/>} */}
                {/* {this.state.dis && <div className="alert alert-danger">Please input a username</div>}
 */}

                <form className='form' onSubmit={this.onSubmit}>  
                    <input type="text" name="text" placeholder="Search Users..." id="" 
                    value={this.state.text} onChange={this.onChange}
                    />
                    {/* <input type="submit" value={userLoaded ? 'Clear' : 'Search'}
                    className={`btn btn-block ${userLoaded ? 'btn-danger ': 'btn-dark '}`}
                    /> */}
                    <input type="submit" value='Search'
                    className={`btn btn-block ${userLoaded ? 'btn-primary ': 'btn-dark '}`}
                    />
                </form>
                {userLoaded && <button className="btn btn-block btn-success" onClick={()=> clearUsers()}>Clear</button>}

            </div>
        )
    }   
}


Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    alert: PropTypes.object
}

export default Search;