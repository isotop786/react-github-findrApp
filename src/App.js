import react,{Component} from "react";
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from "axios";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import Single from './components/users/Single'
import About from './components/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{

  state = {
    users:[],
    loading:false,
    offline:false,
    usersLoaded:false,
    alert:null,
    user:{},
    repos:[],
    followers:[],
    followings:[]
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

  // get a single user
  getUser = async (username)=>{
    this.setState({loading:true})

    const res = await axios.get(`https://api.github.com/users/${username}`)
    
    this.setState({user:res.data,loading:false})

  }

  // getting repos of a user
  getRepos = async username => {
    this.setState({loading:true})
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos`)

    this.setState({repos:res.data})
  }

  // get followers 

  getFollower = async username =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)

    console.log("followers "+res.data)
    this.setState({followers:res.data})
  }

  //  get followers
 
  getFollowing = async username =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    console.log("followings "+res.data)
    this.setState({followings:res.data})
  }


  async componentDidMount(){
    this.setState({loading:true})  
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    this.setState({users:res.data, loading:false})
  }


  render(){
    
    
    return(
      <Router>

      
        <div>
          <Navbar title="GitHub Findr" icon="fab fa-github"/>
        <div className="container">
          

          <Switch>
            <Route exact path='/'>
            {this.state.alert !== null && <Alert alert={this.state.alert}/>}
          {this.state.alert && this.setAlert }
          <Search searchUser={this.searchUsers} userLoaded={this.state.usersLoaded} clearUsers={this.clearUsers}
            setAlert={this.setAlert}
          />
                <Users loading={this.state.loading} users={this.state.users} />
            </Route>
            <Route exact path="/user/:login" render={props => (
              <Single {...props} getUser={this.getUser} user={this.state.user}
               loading={this.state.loading}
               getRepos={this.getRepos}
               repos = {this.state.repos}
               getFollowers={this.getFollower}
               followers={this.state.followers}

               getFollowing={this.getFollowing}
               followings={this.state.followings}
               />
            )}>

            </Route>

            <Route exact path='/about'>
              <About/>
            </Route>

          </Switch>


          
           
        </div>
        
        </div>
      

       
      </Router>
    )
  }
}

export default App;