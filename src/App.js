import React, { useState, useEffect } from 'react';
import "./App.css";
import photo from './images/background1.jpg';
import googleIcon from './images/google.png';
//import material UI
import { Button, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';


function App() {

  const [state, setState] = useState(false);

  function submitFunc(event) {
    event.preventDefault();
    setState(true);
  };

  useEffect(() => {

    function logging(e) {
      let array = Array.from(e.target)
      console.log(array.map((input) => input.value))
    }

    document.addEventListener("submit", logging)
    console.log(state)

    return () => {
      document.removeEventListener("submit", logging)
    }

  }, [state]);


  /*
  Cleanup works the following way:

  A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.
  B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.
  C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.

  A mi esetünkben, ha nem szerepelne a removeEventlistener a return értékben, akkor második kattintásra 2x futna le a logging, és duplán logolná ki az arrayt, mivel duplán hívódna rá az eventlistener a dokumentumra (elsőzör az első, másodszor a második kattintásra)
  */


  return (
    <>
      <img id="background" src={photo} alt="background" />
      <div id="container">
        <h1>Welcome on board!</h1>

        <form id="form" onSubmit={submitFunc}>

          <div className="flex">
            <FaceRoundedIcon id="formIcon" />
            <label>First Name *</label>
          </div>
          <input id="inputField" variant="outlined" input type="text" className="inputField" placeholder="Please enter your first name" required />

          <div className="flex">
            <FaceRoundedIcon id="formIcon" />
            <label>Last Name *</label>
          </div>
          <input id="inputField" variant="outlined" type="text" className="inputField" placeholder="Now your last name" required />

          <div className="flex">
            <AlternateEmailRoundedIcon id="formIcon" />
            <label>E-mail *</label>
          </div>
          <input id="inputField" variant="outlined" type="email" className="inputField" placeholder="Almost there..." required />

          <div className="flex">
            <LockRoundedIcon id="formIcon" />
            <label>Password *</label>
          </div>
          <input id="inputField" variant="outlined" type="password" className="inputField" placeholder="Last step! Pinky promise!" required />

          <Button variant="contained" id="submitBtn"> Here I come! </Button>

          <hr />

          <label>Would you like to sign up with your social account? <br /> No problem! </label>

          <div id="iconCont">

            <IconButton>
              <FacebookIcon id="facebookIcon" />
            </IconButton>

            <IconButton>
              <img src={googleIcon} alt="googleIcon" id="googleIcon" />
            </IconButton>

          </div>

        </form>
      </div>
    </>
  );
}

export default App;
