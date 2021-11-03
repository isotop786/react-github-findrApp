import react,{Component} from "react";
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from "axios";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';


class App extends Component{

  state = {
    users:[],
    loading:false,
    offline:false,
    usersLoaded:false,
    alert:null
  }


  searchUsers = async text => {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)

     this.setState({users:res.data.items, loading:false})
     this.setState({usersLoaded:true})
     this.setState({alert:null})
     console.log(res)

  }

  clearUsers = ()=>{
    this.setState({users:[],usersLoaded:false})
  }

  setAlert = (text,type)=>{
    this.setState({alert:{text,type}})
    
    setTimeout(()=>this.setState({alert:null}),1000)
  }

 
  async componentDidMount(){
    this.setState({loading:true})  
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    
   
    this.setState({users:res.data, loading:false})

 
  }


  render(){
    
    
    return(
      <div>
        <Navbar title="GitHub Findr" icon="fab fa-github"/>
       <div className="container">
         {this.state.alert !== null && <Alert alert={this.state.alert}/>}
        {this.state.alert && this.setAlert }
        <Search searchUser={this.searchUsers} userLoaded={this.state.usersLoaded} clearUsers={this.clearUsers}
          setAlert={this.setAlert}
        />
         
          <Users loading={this.state.loading} users={this.state.users} />
       </div>
      
      </div>
    )
  }
}

export default App;