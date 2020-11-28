import React, { useEffect, useState } from "react";
import "../App.css";
const DarkWhiteTheme = () => {
  const [themeColor, setThemeColor] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(themeColor));
  }, [themeColor]);

  return (
    <div className={themeColor ? " App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
            <input
              type="checkbox"
              onChange={() => setThemeColor(!themeColor)}
              checked={themeColor}
            />
          
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content">
        <h1>{themeColor ? "Dark Mode is On " : "Light mode is set"}</h1>
        <h3>To Set Theme color CLick on Toggle button</h3>
      </div>
    </div>
  );
};

export default DarkWhiteTheme;
