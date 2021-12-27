import React, { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../Context/Context";
function Toggle() {
  const { state, dispatch } = useContext(ThemeContext);
  const toggleHandle = () => {
    dispatch({ type: "TOGGLE" });
  };
  console.log(state);
  return (
    <div className="t">
      <i class="t-icon fas fa-sun"></i>
      <i class="t-icon fas fa-moon"></i>
      <div
        style={{ left: state.darkMode ? "0px" : "25px" }}
        onClick={toggleHandle}
        className="button"
      ></div>
    </div>
  );
}

export default Toggle;
