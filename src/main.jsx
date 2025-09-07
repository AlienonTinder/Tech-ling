import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from './pages/signin/Signin';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Accounts from './pages/Accounts/Accounts';
import LandingPage from "./pages/LandingPage/LandingPage";
import Level_page from "./pages/LevelPage/Level_page";
import Leaderboard from "./pages/Leaderboard/Leaderboard"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/accounts" element={<Accounts/>} />
      <Route path="/" element={<LandingPage/>} />
      <Route path="/levels" element={<Level_page/>} />
      <Route path="/settings" element={<Accounts/>} />
      <Route path="/leaderboard" element={<Leaderboard/>} />
      
    </Routes>

    
    </BrowserRouter>
  </React.StrictMode>
);
