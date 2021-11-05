import react,{Component,useState,useEffect} from "react";
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


const App  = ()=>{




  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(false)
  const [offline, setOffline] = useState(false)
  const [usersLoaded, setUserLoaded] = useState(false)
  const [alert,setAlertstate] = useState(null)
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])
  const [followers,setFollowers] = useState([])
  const [followings,setFollowings] = useState([])




   const  searchUsers = async  (text) => {
    
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)

    setUsers(res.data.items)
    setLoading(false)

    setAlertstate(null)
    console.log(res.data.items)

  }

  const clearUsers = ()=>{
    setUsers([])
    setUserLoaded(false)
  }

  const setAlert = (text,type)=>{
    
    setAlertstate(text,type)
  
    setTimeout(()=> setAlertstate(null),1000)
  }

  // get a single user
  const getUser = async (username)=>{
    
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}`)
    
    setUser(res.data)
    setLoading(false)

  }

  // getting repos of a user
  const getRepos = async username => {
   
    setLoading(true)
   const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=created_at`)

    setRepos(res.data)
  }

  // get followers 
  const getFollower = async username =>{
    
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/followers`)

    setFollowers(res.data)
  }

  //  get followers
  const getFollowing = async username =>{
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    setFollowings(res.data)
  }



  useEffect(()=>{
    setLoading(true)
    
    axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}
    , {
      headers: {
          'Authorization': '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',
      }
    `)
    .then((res)=>{
        setUsers(res.data)
        setLoading(false)
       
    })
    .catch(err=>{
      console.log(err)
    })

  },[])

 
    
    return(
      <Router>
        <div>
          <Navbar title="GitHub Findr" icon="fab fa-github"/>
            <div className="container">
          

              <Switch>
                <Route exact path='/'>
                {alert !== null && <Alert alert={alert}/>}
              { alert && setAlert }
              <Search searchUser={searchUsers} userLoaded={usersLoaded} clearUsers={clearUsers}
                setAlert={setAlert}
              />
                <Users loading={loading} users={users} />
            </Route>
              <Route exact path="/user/:login" render={props => (
                <Single {...props} getUser={getUser} user={user}
                loading={loading}
                getRepos={getRepos}
                repos = {repos}
                getFollowers={getFollower}
                followers={followers}

                getFollowing={getFollowing}
                followings={followings}
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


export default App;