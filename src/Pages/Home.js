import React, { useEffect, useState } from "react";
import Breed from "../Components/Breed";
import Random from "../Components/Random";
import breed from "../Components/img/menu-img-1.png";
import random from "../Components/img/find-dog-img.png";
import loginBackgroundImg from "../Components/img/login-bg.png";

function Home() {
  const [menuItem, setMenuItem] = useState(false);

  document.body.style.backgroundColor = "#1870A1";
  document.body.style.backgroundImage = `url("${loginBackgroundImg}")`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionY = "bottom";
  document.body.style.height = "100vh";

  useEffect(() => {
    if (window.innerWidth < 767 && menuItem === false) {
      document.body.style.height = "max-content";
      document.body.style.backgroundImage = "none";
      document.getElementById("main-content").style.padding = "0";
    }
    if (window.innerWidth < 1199 && menuItem === "breed") {
      document.getElementById("main-content").style.padding = "20px";
    }
  }, [menuItem]);

  return (
    <>
      {menuItem === false && (
        <>
          <div
            id="main-content"
            className="container"
            style={{ background: "transparent" }}
          >
            <div className="heading-wrap">
              <p className="heading home" style={{ color: "#FFFBF5" }}>
                Click On One
              </p>
            </div>
            <div className="home-menu-wrap">
              <div
                className="menu-item"
                onClick={() => {
                  setMenuItem("breed");
                }}
              >
                <img src={breed} srcSet={breed} alt="" />
                <p className="menu-heading">Breeds</p>
              </div>
              <div
                className="menu-item"
                onClick={() => {
                  setMenuItem("random");
                }}
              >
                <img src={random} srcSet={random} alt="" />
                <p className="menu-heading">Find A Dog</p>
              </div>
            </div>
          </div>
        </>
      )}
      {menuItem === "breed" && <Breed />}
      {menuItem === "random" && <Random />}
    </>
  );
}

export default Home;
