import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar () {
return(
    <> 
    <div className="nav">
        <div className="logo">
             {/* <img className='logo-img' src="./././public/logo1.2.svg"></img> */}
             OxfoTech
        </div>
        <div className="menu">
              
              <Link to="/about" className="menu-a">About</Link>
              <Link to="/download" className="menu-a">Download</Link>
              <Link to="/review" className="menu-a">Review</Link>
              <Link to="/contacts" className="menu-a">Contacts</Link>
        </div>
        <div className="register">
            
            
            <Link to="/signup" className="reg-a">Sign Up</Link>
            <Link to="/signin" className="reg-a">Sign In</Link>
           
        </div>
    </div>
    </>
)
}
