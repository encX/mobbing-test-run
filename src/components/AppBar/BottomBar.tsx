import React from "react";
import NavButton from "../NavButton/NavButton";
import "./BottomBar.css";

const BottomBar = () => {
  const buttons = ["Stays", "Flights", "Flights + Hotel", "Car rent"];
  return (
    <div className="bottomBar">
      {buttons.map((text) => (
        <NavButton text={text} />
      ))}
    </div>
  );
};

export default BottomBar;
