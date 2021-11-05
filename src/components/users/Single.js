import React,{Component,Fragment, useEffect} from 'react'
import {  useParams} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';
import Repo from './Repo';
import Followers from './Followers';
import Following from './Following';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Single = ({user,match,loading, followers,followings,getUser,getRepos,getFollowers,getFollowing,repos})=> {

        useEffect(()=>{
            const username = match.params.login
            getUser(username)
            getRepos(username)
            getFollowers(username)
            getFollowing(username)

        },[])



        return(
            <Fragment>
                <Link  to='/'>
                    <span className="btn btn-danger" style={{borderRadius:'5px'}}>Back</span>
                </Link>
                {loading && <Spinner/>}
                {user && <h3>{user.login}</h3>}
            
                <p>Hireable: {' '} 
                
                {user.hireable ? <i className="fas fa-check text-success"></i> : 
                <i className="fas fa-times text-danger"></i>}
                </p>

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={user.avatar_url} alt="" style={imgStyle} />
                        <h1>{user.name}</h1>
                        <p>Location: {user.location}</p>
                        </div>
                       <div>
                           {user.bio && (
                               <Fragment >
                                   <h3>Bio</h3>
                                   <p>{user.bio}</p>
                               </Fragment>
                           )}
                           <a style={{borderRadius:'5px'}} className="btn btn-success my-2" href={user.html_url} target="_blank">Visit Github Profile</a>
                            <ul>
                                <li>
                                    <strong>Username: </strong>{user.login}
                                </li>
                                {user.company && <Fragment>
                                    <li><strong>Company: </strong> {user.company}</li>
                                    </Fragment>}
                                {user.blog && <Fragment>
                                    <li><strong>Website: </strong> <a href={`${user.blog}`} target="_blank">{user.blog} </a></li>
                                    </Fragment>}
                                {user.email && <Fragment>
                                    <li><strong>Email: </strong> <a href={`mailto:${user.email}}`} target="_blank">{user.email} </a></li>
                                    </Fragment>}
                                {user.twitter_username && <Fragment>
                                    <li><strong>Twitter Username: </strong> <a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank">{user.twitter_username} </a></li>
                                    </Fragment>}
                            </ul>
                      </div>
                        
                        <div>
                            
                        </div>

                    </div>
            
                    {/* Second Part */}

                    <div className="card text-center ">
                        <div className="badge badge-primary"><strong>Followers: </strong>{user.followers}</div>
                        <div className="badge badge-danger"><strong>Followings: </strong>{user.following}</div>
                        <div className="badge badge-dark"><strong>Public Repos: </strong>{user.public_repos}</div>
                        <div className="badge badge-success"><strong>Public Gists: </strong>{user.public_gists}</div>
                    </div>

                    {/* Second Part Ends*/}
                        
                            
                            <Router>
                            <div className="card " style={{marginBottom:'10px'}}>
                            <ul className="nav">
                                <li><Link to='/repos' className="btn btn-dark">Repository</Link></li>
                                <li><Link to='/followings' className="btn btn-danger">Followings</Link></li>
                                <li><Link to='/followers' className="btn btn-primary">Followers</Link></li>
                                
                            </ul>
                            </div>
                            <Switch>
                                <Route exact path='/repos'>
                                    <Repo repos={repos}/>
                                </Route>
                                <Route exact path='/followings'>
                                    {/* <Following followings={followings}/> */}
                                    <Followers fprops={followings} title="Followings"/>
                                </Route>
                                <Route exact path='/followers'>
                                    <Followers fprops={followers} title="Followers"/>
                                </Route>
                            </Switch>
                            </Router>
                        
                    {/* Repos */}

                  

                    {/* Repos End  */}
                <style jsx>{`
                .nav{
                    width:50%;
                    display:flex;
                    justify-content:space-between;
                }
                `}</style>
            </Fragment>
        )
    }


const imgStyle={
    width:'100px',
    borderRadius:'50%'
}




Single.propTypes = {
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getUser: PropTypes.func
}


export default Single;