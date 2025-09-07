import './Level_page.css';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useState } from 'react';
import axios from 'axios';



export default function Level_page(){


    return(
        <>
        <div className="level-page">
        <div className="level-nav">
            <div className="home-logo">OxfoTech</div>

            <div className="menu-home">
            
                <Link to="/home" className="menu-a">home</Link>
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
        <div className="questions">
            <div>
               <h1 className="home-level-h1">&nbsp;Level 1 :</h1>
            </div>
            <div>
          

            </div>


        </div>
        </div>
       <Footer></Footer>
        </>
    )
}


