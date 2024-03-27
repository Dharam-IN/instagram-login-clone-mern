import React from 'react';
import LOGO from './photos/instablak.png';
import FaceBookICon from './photos/facebook-icon.png';
import AppleStore from './photos/applestore.png';
import GoogleStore from './photos/googlestore.png';
import HomePhoneMain from './photos/home-phones-main.png';

const Home = () => {
  return (
    <>
        <>
  <main className="mainSec">
    <div className="log-in-container">
      <div className="log-in">
        <img src={LOGO} className="logo" />
        <form action="" className="log-in-form">
          <input type="email" placeholder="Phone number,username or email" />
          <input type="password" placeholder="Password" />
          <button className="log-in-button">Log In</button>
        </form>
        <span className="or-divider">OR</span>
        {/*FACEBOOK OPTION*/}
        <div className="fb-login">
          <a href="#" className="anchor">
            <img src={FaceBookICon} />
            <span>Log in with Facebook</span>
          </a>
        </div>
        {/*forgot passwd*/}
        <a href="#" className="forgotpass">
          Forgot password?
        </a>
      </div>
      {/*sign up*/}
      <div className="sign-up">
        <span>
          Don't have an account
          <a href="#">Sign up</a>
        </span>
      </div>
      {/*download*/}
      <div className="get-the-app">
        <span>Get the app</span>
        <div className="app-images">
          <a href="#">
            <img src={AppleStore} />
          </a>
          <a href="#">
            <img src={GoogleStore} />
          </a>
        </div>
      </div>
    </div>
    {/*phones*/}
    <div className="phones-container">
      <img src={HomePhoneMain} />
    </div>
  </main>
  <footer>
    <ul className="footer-links">
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">HELP</a>
      </li>
      <li>
        <a href="#">PRESS</a>
      </li>
      <li>
        <a href="#">API</a>
      </li>
      <li>
        <a href="#">JOBS</a>
      </li>
      <li>
        <a href="#">PRIVACY</a>
      </li>
      <li>
        <a href="#">TERMS</a>
      </li>
      <li>
        <a href="#">LOCATION</a>
      </li>
      <li>
        <a href="#">TOP</a>
      </li>
      <li>
        <a href="#">ACCOUNTS</a>
      </li>
      <li>
        <a href="#">HASHTAGS</a>
      </li>
      <li>
        <a href="#">LANGUAGE</a>
      </li>
    </ul>
    <div className="footercopy">
      <span className="copyright">© © 2024 Instagram from Meta</span>
    </div>
  </footer>
</>

    </>
  )
}

export default Home