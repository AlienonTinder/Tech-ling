import Navbar from "../../components/Navbar";
import './Leaderboard.css';
import { Link } from "react-router-dom";

export default function Leaderboard(){

return(
    <>
    
    <div className="hmc">
        <div className="Home-nav">
            <div className="home-logo">OxfoTech</div>

            <div className="menu-home">
        
                <Link to="/levels" className="menu-a">Levels</Link>
                <Link to="/leaderboard" className="menu-a">Leaderboard</Link>
                <Link to="/badges" className="menu-a">Badges</Link>
                <Link to="/settings" className="menu-a">Settings</Link>

                <div>
                    <img
                        className="profile-icon"
                        src="/profile_placeholder.png"
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    </div>
    
    <div>
        <div>
              <h1 className="home-level-h1">Leaderboard</h1>
        </div>
        <div className="leader-table">
            <table>
                <tr>
                    <th>SL.no</th>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Place</th>

                </tr>
                <tr>
                    <td>1.</td>
                    <td>Yashas</td>
                    <td>1000</td>
                    <td>1st</td>
                </tr>
            </table>
        </div>
    </div>
    
    </>


 

       

        
)
}