import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
// import Menu from "./Menu";
import Baneer from "./Baneer";
import styles from "../CssComponent/home.module.css"
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
  border: 1px solid #000;
  border-radius: 3px;
  box-shadow: 1px 0 6px -3px #b5b5b5 inset;
  width: 380px;
  padding: 6px;
`;

const Navbar = () => {
  return (
    <div>
     <Baneer/>
      <NavBarStyled style={{ padding: "10px" }}>
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex" }}>
            <Navinput type="text" placeholder="Search here..." />
            <div>
              <FaSearch
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  backgroundColor: "rgb(66,66,66)",
                  color: "white",
                  cursor: "pointer",  
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "-460px", cursor: "pointer" }}>
          <a href="http://localhost:3000/">
            <Navimg
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wA1TVHRYEzzNRMqC6mE9Mmm17u5kXXpllA&usqp=CAU"
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
          <p>About</p>
          <p>Offers</p>
          <p>Pay</p>
              <MdAccountCircle
                style={{
                  height: "60px",
                  width: "35px",
                  cursor: "pointer",
                }}
              />
          </div>
        </div>
      </NavBarStyled>
    </div>
  );
};

export default Navbar;
