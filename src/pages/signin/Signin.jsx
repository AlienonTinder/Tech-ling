import './signin.css';
export default function Signin(){

    return(
        <>
        <div className="signin">
        <div class="signin-container">
            <h2 className="signin-login">Login</h2>
            <input className="signin-input-email" type="email" id="email" placeholder="Email Address" />
            <input className="signin-input-password" type="password" id="password" placeholder="Password" />
            <button className="email-login" id="email-login">Login</button>
            <button id="google-login" class="google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Sign in with Google
            </button>
        </div>
        </div>
        </>

    
    )
}

