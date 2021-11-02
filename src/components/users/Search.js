import React, {Component} from 'react' 

class Search extends Component{
    state ={
        text: ''
    }

    onChange = (e)=> this.setState({text:e.target.value})
 
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUser(this.state.text)
    }

    render(){
        return(
            <div>
                <form className='form' onSubmit={this.onSubmit}>  
                    <input type="text" name="text" placeholder="Search Users..." id="" 
                    value={this.state.text} onChange={this.onChange}
                    />
                    <input type="submit" value="Search"
                    className="btn btn-dark btn-block"
                    />
                </form>
            </div>
        )
    }   
}

export default Search;