import React from "react";
import me from "../../img/me.png";
import "./Intro.css";
function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My Name is </h2>
          <h1 className="i-name">SANTOSH </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">WEB DEVELOPER</div>
              <div className="i-title-item">UI/UX DESIGNER</div>
              <div className="i-title-item">WEBDEVELOPER</div>
              <div className="i-title-item">FREELANCER</div>
              <div className="i-title-item">FREELANCER</div>
            </div>
          </div>
          <div className="i-desc">
          I am a FullStak MERN developer . Experienced with 2 years of web developing Works & numerous Projects .
            Currently Working remotely as a Freelancer building my loving clients'  small & large Scale businesses Web Application.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-bg"> </div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
