import "./Account.css";
import { Link } from "react-router-dom";  


export default function Account() {
  return (
    <div className="acc">
      <div className="account-nav">
        <div className="account-logo">OxfoTech</div>
        <div className="menu-account">
          <Link className="menu-a" to="/levels">Levels</Link>
          <Link className="menu-a" to="/leaderboard">Leaderboard</Link>
          <Link className="menu-a" to="/badges">Badges</Link>
          <Link className="menu-a" to="/settings">Settings</Link>
          <div>
            <img className="profile-icon" src="/profile_placeholder.png" alt="profile" />
          </div>
        </div>
      </div>


        <div>
         <h1 className="home-level-h1">Account Settings </h1>
        </div>

      <div className="profile-info">
        <div className="Profile-img">
            <img src="/profile_placeholder.png" alt="profile-img" />
      
             <Link className="menu-a" to="edit-profile">Edit</Link>
        </div>
        <div className="user-info">
          <h3>Yashas S U</h3>
          <h4>yashasreddy2007@gmail.com</h4>
          <i>Student</i>
        </div>


      </div>


      <div className="row1-acc">
        <Link className="glass-btn" to="Account-information">Account Information</Link>
        <Link className="glass-btn" to="Account-information">Prefrences</Link>
      </div>
      <div className="row2-acc" >
          <Link  className="glass-btn" to="privacy-Policy">Privacy Policy</Link>
        
          <Link className="row3-acc" to="delete-account">Delete Account</Link>
      </div>
      <div className="row3-acc">
           <Link className="row3-acc" to="log-out">Log Out</Link>
      </div>
    </div>
  );
}
