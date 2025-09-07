import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Home() {
  return (
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

        <div className="home-container">
          <div className="home-level">
            <div>
              &nbsp;&nbsp;
              <img className="home-star" src="/home-star.png" alt="star" />
              <div>
                <h1 className="home-level-h1">&nbsp;Level 1 :</h1>
                <p>
                  &nbsp;• Set Goals and Motivation: <br />
                  &nbsp;– Identify personal motivations. <br />
                  &nbsp;– Set achievable goals.
                </p>
              </div>
            </div>

            <div className="home-start">
             <h1>
              <Link to="/api/level1" className="menu-a">Start ></Link>
              </h1>
            </div>
          </div>

          <div>
            <div className="home-leaderboard">
              <h1>&nbsp;Leaderboard</h1>
              <p>
                &nbsp; Deepak 500 1st <br />
                &nbsp; Pritvi 460 2nd <br />
                &nbsp; Yashas 360 3rd
              </p>
            </div>

            <div className="home-badges">
              <h1>&nbsp;Badges</h1>
              <p>
                &nbsp; Level 1 <br />
                &nbsp; Level 2 <br />
                &nbsp; Consistency Champion
              </p>
            </div>
          </div>

          <div className="home-qoute">
            <h1>
              &nbsp;The only way to Great work is to Love what You do!!!
            </h1>
            <p>&nbsp;- Steve Jobs</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
