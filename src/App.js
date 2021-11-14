import react,{Component,useState,useEffect} from "react";
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from "axios";
import Search from "./components/users/Search";
import Single from './components/users/Single'
import About from './components/About'
import GithubState from  './context/github/GithubState'
import AlertState from "./context/alert/alertState";

import NotFound from './components/layout/NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App  = ()=>{



  const [followings,setFollowings] = useState([])



  //  get followers
  const getFollowing = async username =>{

    const res = await axios.get(`https://api.github.com/users/${username}/following`)
    setFollowings(res.data)
  }


    return(
      <GithubState>
        <AlertState>
      <Router>
        <div>
          <Navbar title="GitHub Findr" icon="fab fa-github"/>
            <div className="container">
              <Switch>
                <Route exact path='/'>
                    <Search  />
                    <Users />
                </Route>
                <Route exact path="/user/:login" render={props => (
                  <Single {...props} 
                  getFollowing={getFollowing}
                  followings={followings}
                  />
                )}>

              </Route>

            <Route exact path='/about'>
              <About/>
            </Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    )
  }


export default App;