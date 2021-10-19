import React, { useContext } from "react";
import { AppContext } from "../context";

const Header = () => {
  const data = useContext(AppContext);
  return (
    <div className="header">
      <h1>Pokemon Memory Game</h1>
      <h2>Click on the cards below to test your memory</h2>
    
      <div className="scoreDiv">
      <h4>Highscore {data.highscore}</h4>
      <h4>Current Score {data.currentScore}</h4>
      </div>
    </div>
  );
};

export default Header;
