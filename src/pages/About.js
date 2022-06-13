import React, { Component } from 'react';
import "./About.css";
import Collins from "../assets/IMG-7545.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <p>Design your About me page </p>
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                // Image goes here
                src={Collins}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title"> Collins Sedem Senaya </div>
              <div className="brief_description">
              // Details about you goes here
                <h1><br></br>Education : Sonoma State University</h1>
                <h1><br></br> Major: Bachelor of Science Computer Science and Bachelor of Science Mathematics with a concerntration in Applied Mathematics</h1>
                <h1><br></br>Interests : I like playing Soccer, reading and watching movies</h1>
                <h1><br></br>Fun Fact : I am learning how to code</h1>

              </div>
            </div>
          </div>
        </div>

      </div >
    )
  }
}