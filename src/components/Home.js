import React from "react";
import "../styles/HomeStyle.css";

/* logos */
import ValoLogo from "../img/valorant-logo.png";
import linkedinLogo from "../img/linkedin-logo.png";
import twitterLogo from "../img/twitter-logo.png";

function Home() {
  return (
    <div className="homeContainer">
      <div className="logo">
        <img src={ValoLogo} alt="" width="300px" />
      </div>
      <div className="homeContent">
        <h1>VALORANT-UI</h1>
        <p>
          Everything about Valorant is here. You can easily find information
          about Agents, Maps, Weapons and more.
        </p>
      </div>
      <div className="accounts">
        <a href="https://www.linkedin.com/in/yusufakcekoce/" target="_blank">
          <img src={linkedinLogo} alt="" width={"50px"} />
        </a>
        <a href="https://twitter.com/yusufakcekoce" target="_blank">
          <img src={twitterLogo} alt="" width={"50px"} />
        </a>
      </div>
    </div>
  );
}
export default Home;
