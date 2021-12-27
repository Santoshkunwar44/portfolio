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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur distinctio nihil quae modi ipsam rerum aspernatur vero!
            Lorem ipsum dolor sit.\
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
