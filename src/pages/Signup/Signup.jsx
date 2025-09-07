import './Signup.css';

export default function Signup(){

    return(
        
        <div className='signup-main-c'>

        <div class="signup-container">
            <h2>Create Your Account</h2>
            <form id="signupForm">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required/>
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required/>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required/>
            <button type="submit" className='signupbtn'>Sign Up</button>
            </form>
            <button id="googleLoginBtn">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="20" height="20" />
            Continue with Google
            </button>
            </div>
        
        </div>
    )
}