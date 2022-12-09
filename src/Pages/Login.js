import React, { useEffect } from "react";
import loginBackgroundImg from "../Components/img/login-bg.png";
import heroImgOne from "../Components/img/hero-img-1.png";
import heroImgTwo from "../Components/img/hero-img-2.png";
import heroImgThree from "../Components/img/hero-img-3.png";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  document.body.style.backgroundColor = "#FFFBF5";
  document.body.style.backgroundImage = `url("${loginBackgroundImg}")`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionY = "bottom";
  document.body.style.height = "100vh";

  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (user !== null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <>
      <div className="container">
        <p className="hero-heading">Find your best companion.</p>
        <div className="hero-img-wrap">
          <img src={heroImgOne} className="one" alt="Amazing Dogs" />
          <img src={heroImgTwo} className="two" alt="Amazing Dogs" />
          <img src={heroImgThree} className="three" alt="Amazing Dogs" />
        </div>
      </div>
    </>
  );
}

export default Login;
