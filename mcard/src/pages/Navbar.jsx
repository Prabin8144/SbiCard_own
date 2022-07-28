import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
// import Menu from "./Menu";
import Baneer from "./Baneer";
import styles from "../CssComponent/home.module.css"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Navimg = styled.img`
height:80px;
width:200px
cursor:pointer;
color:white

`;

const Navinput = styled.input`
  background-image: radial-gradient(ellipse at center, #fff, #fff);
  // border: 1px solid #000;
  outline:none;
  border-radius: 3px;
  
  width: 380px;
  padding: 6px;
`;

const Navbar = () => {
  return (
    <div>
     <Baneer/>
      <NavBarStyled style={{ padding: "10px" }}>
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex",border:"1px solid black",height:"35px" }}>
            <Navinput type="text" placeholder="Search here..." />
            <div style={{height:"100%", backgroundColor: "rgb(66,66,66)",color: "white", cursor: "pointer",boxShadow: "1px 0 6px -3px #b5b5b5 inset"}}>
              <FaSearch
                style={{
                  padding: "5px",
                  marginTop:"5px"
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "-460px", cursor: "pointer" }}>
          <a href="http://localhost:3000/">
            <Navimg
              src="https://mcart24.com/media/logo/websites/1/mcart24-logo_1.png"
              alt="praveen"
            />
          </a>
        </div>
        <div>
          <div className={styles.btn}
            style={{
              marginLeft: "-300px",
              gap: "20px",
              display: "flex",
              padding: "10px",
              color: "rgb(30,81,108)",
            }}
          >
          <Link to="/about"><p>About Us</p></Link>
          <Link to="/offer"><p>Offers</p></Link>
          <Link to="/contact"><p>Contact Us</p></Link>
          <Link to="/login"><MdAccountCircle
                style={{
                  height: "60px",
                  width: "35px",
                  cursor: "pointer",
                }}
              /></Link>
          </div>
        </div>
      </NavBarStyled>
    </div>
  );
};

export default Navbar;
