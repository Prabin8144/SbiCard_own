import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
// import Menu from "./Menu";
import Baneer from "./Baneer";
import styles from "../CssComponent/home.module.css";
import { useNavigate } from "react-router-dom";
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
  outline: none;
  border-radius: 3px;
  border: none;
  width: 380px;
  padding: 6px;
`;
const P1 = styled.p`

`

const Navbar = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("auth")) || [];
  console.log(user, "user");

  return (
    <div>
      <Baneer />
      <NavBarStyled>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "2px solid black",
              height: "35px",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            <Navinput
              type="text"
              placeholder="Search here..."
              style={{ width: "260px" }}
            />
            <div
              style={{
                height: "100%",
                width: "40px",
                backgroundColor: "rgb(66,66,66)",
                color: "white",
                cursor: "pointer",
                boxShadow: "1px 0 6px -3px #b5b5b5 inset",
              }}
            >
              <FaSearch
                style={{
                  marginLeft:"14px",
                  backgroundColor: "rgb(66,66,66)",
                  color: "white",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ cursor: "pointer"}}>
          <a href="http://localhost:3000/">
            <Navimg
              src="https://mcart24.com/media/logo/websites/1/mcart24-logo_1.png"
              alt="praveen"
            />
          </a>
        </div>
        <div style={{ marginRight: "20px" }}>
          <div
            className={styles.btn}
            style={{
              gap: "20px",
              display: "flex",
              padding: "10px",
              color: "rgb(30,81,108)",
              border: "none",
              outline: "none"
            }}
          >
            <Link to="about" style={{textDecoration:"none"}}>
              <P1>About Us</P1>
            </Link>
            <Link to="credit-card" style={{textDecoration:"none"}}>
              <P1>Credit Card</P1>
            </Link>
            <Link to="offer" style={{textDecoration:"none"}}>
              <P1>Offers</P1>
            </Link>
            <Link to="contact" style={{ display: user.areYou === "employee" && "none",textDecoration:"none" }}>
              <P1>Contact Us</P1>
            </Link>
            <Link to="video" style={{ display: !user.areYou === "employee" && "none",textDecoration:"none" }}>
              <P1>Video Chat</P1>
            </Link>
            <Link to="signup" style={{ display: user.first_name && "none",textDecoration:"none" }}>
              <P1>Sign Up</P1>
            </Link>
            <div style={{ display: !user.first_name && "none", cursor:"pointer" }}>
              <P1
                onClick={() => {
                  localStorage.setItem("auth", JSON.stringify(""));
                }}
              >
                Logout
              </P1>
            </div>
            <Link to="login" style={{textDecoration:"none"}}>
              <MdAccountCircle
                style={{
                  height: "60px",
                  width: "35px",
                  cursor: "pointer",
                  display: user.first_name && "none",
                }}
              />
              <P1 style={{ display: !user.first_name && "none" }}>
                Mr. {user.first_name}
              </P1>
            </Link>
          </div>
        </div>
      </NavBarStyled>
    </div>
  );
};

export default Navbar;
