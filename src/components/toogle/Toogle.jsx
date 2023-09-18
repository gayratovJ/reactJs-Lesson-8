import React from "react";
import comps from "../../assets/svg15.svg";
import shorts from "../../assets/svg16.svg";
import subs from "../../assets/svg17.svg";
import library from "../../assets/svg18.svg";
import history from "../../assets/svg19.svg";
import vid from "../../assets/svg20.svg";
import later from "../../assets/svg21.svg";
import pop from "../../assets/svg23.svg";

import "./Toogle.module.css"
const Toogle = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={comps} alt="" />
          <h3>Explore</h3>
        </li>
        <li>
          <img src={shorts} alt="" />
          <h3>Shorts</h3>
        </li>
        <li>
          <img src={subs} alt="" />
          <h3>Subscriptions</h3>
        </li>
        <li>
          <img src={library} alt="" />
          <h3>Library</h3>
        </li>
        <li>
          <img src={history} alt="" />
          <h3>History</h3>
        </li>
        <li>
          <img src={vid} alt="" />
          <h3>Your videos</h3>
        </li>
        <li>
          <img src={later} alt="" />
          <h3>Watch later</h3>
        </li>
        <li>
          <img src={pop} alt="" />
          <h3>Pop</h3>
        </li>
      </ul>
    </nav>
  );
};

export default Toogle;
