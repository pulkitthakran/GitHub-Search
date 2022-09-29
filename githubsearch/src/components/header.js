import React, { useState } from "react";
// import ModeNightIcon from "@mui/icons-material/NightlightRoundSharp";
// import LightModeIcon from "@mui/icons-material/LightMode";
import { ModeNightOutlined, LightModeOutlined } from "@mui/icons-material";

function Header(props) {
  const [themeMode, setThemeMode] = useState("Dark");
  function themeToggle() {
    const btn = document.querySelector(".icon-dark");
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      if (themeMode === "Light") {
        setThemeMode("Dark");
      } else {
        setThemeMode("Light");
      }
    });
  }
  return (
    <header>
      <h1 className="header-title">devfinder</h1>
      <button className="icon-dark" onClick={themeToggle}>
        <span id="change-theme-name">{themeMode}</span>
        {themeMode === "Light" ? (
          <LightModeOutlined
            sx={{ color: "#FF0000", height: "5vh", letterSpacing: "5px" }}
          />
        ) : (
          <ModeNightOutlined
            sx={{ color: "#FF0000", height: "5vh", letterSpacing: "5px" }}
          />
        )}
      </button>
    </header>
  );
}

export default Header;
