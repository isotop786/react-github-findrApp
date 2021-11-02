import PropTypes from 'prop-types'

const Navbar = ({icon,title})=> {

        return(
            <nav className="navbar bg-primary">
               <h1 style={{color:'#333'}}>
                   <i className={icon} />
                   &nbsp;{title}
               </h1>
            </nav>
        )
    }


Navbar.defaultProps={
    title:"Github_Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon: PropTypes.string
}



export default Navbar;