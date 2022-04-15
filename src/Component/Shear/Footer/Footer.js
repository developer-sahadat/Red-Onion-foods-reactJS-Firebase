import React from "react";
import "./Footer.css";
import logo from "../../../Assets/images/logo2.png";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-text">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img style={{ width: "150px" }} src={logo} alt="" />
          </div>
          <div className="col-md-3">
            <p>About online Food</p>
            <p>Read our blog</p>
            <p>Sign up to deliver</p>
            <p>Add your restaurant</p>
          </div>
          <div className="col-md-3">
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>View All cities</p>
            <p>Restaurants near me</p>
          </div>
        </div>

        <div className="copyRight mt-5 row">
          <h6 className="col-md-6">CopyRight &copy; 2022 Food</h6>
          <div className="col-md-6">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Pricing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
