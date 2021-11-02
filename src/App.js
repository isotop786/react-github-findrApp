import react,{Component} from "react";
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from "axios";
import Search from "./components/users/Search";



class App extends Component{

  state = {
    users:[],
    loading:false,
    offline:false
  }

  searchUser = (text)=>{
    this.setState({loading:true})
   console.log('Searching User: '+text)
   axios.get(`https://api.github.com/search/users?q=${text}`)
    .then(res=>{
      this.setState({users:res.data.items, loading:false})
      // console.log(res.data.items)
      // console.log(this.state.users)
    })
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
        <Search searchUser={this.searchUser}/>
         
          <Users loading={this.state.loading} users={this.state.users} />
       </div>
      
      </div>
    )
  }
}

export default App;