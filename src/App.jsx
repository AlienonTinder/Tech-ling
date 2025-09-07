import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signin from './pages/signin/Signin';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Accounts from './pages/Accounts/Accounts';

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />
      <Hero />
      <Home />
       <Signin />
       <Signup />
      <Accounts/>
      
    </>
  );
}
