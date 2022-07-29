import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsFillHandbagFill, BsFillHeartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";
import { MdDataSaverOff } from "react-icons/md";

const MainDiv = styled.div`
  width: 900px;
  height: 664px;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;
  background: #f0ecec;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  position: relative;
`;
const LowerDiv = styled.div`
  img {
    width: 100%;
    height: 664px;
    z-index: 2;
    left: 0px;
    top: 0px;
    position: absolute;
  }
`;
const UpperDiv = styled.div`
  width: 70%;
  height: 327px;
  background: #212121;
  opacity: 0.7;
  z-index: 3;
  left: 15%;
  top: 33%;
  position: absolute;
  color: #fff;
  text-align: left;
  font-weight: 550;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  p {
    padding-left: 30px;
  }
`;

const RightDiv = styled.div`
  width: 49%;
  display: flex;
  align-items: center;
  text-align: center;
`;
const InnerDiv = styled.div`
  width: 308px;
  text-align: center;
  margin: auto;
`;
const Title = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: #1e1f21;
  margin: 0;
`;
const P1 = styled.p`
  font-size: 14px;
`;
const Div1 = styled.div`
  margin-top: 8px;
  input {
    width: 96%;
    font-size: 14px;
    height: 34px;
    outline: none;
    padding-left: 10px;
    border: 1px solid #1c1c1c;
  }
`;
const Div2 = styled.div`
  display: ${(props) => (props.isLoggedIn ? "none" : "flex")};
  align-items: center;
  margin-top: 10px;
  input{
    cursor: pointer;
  }
  label {
    font-size: 14px;
    color: #1c1c1c;
    font-weight: 500;
  }
`;
const ForgotP = styled.p`
  margin: 0;
  display: ${(props) => props.isLoggedIn === false && "none"};
`;
const Button = styled.button`
  width: 302px;
  height: 37px;
  margin-top: 25px;
  background: #1c1c1c;
  color: #fff;
  font-weight: 550;
  cursor: pointer;
  letter-spacing: 0.3px;
`;
const P2 = styled.p``;
const SocialIcons = styled.div`
  img {
    margin-right: 10px;
  }
`;
const P3 = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;
const P4 = styled.p`
  display: ${(props) => props.isLoggedIn === true && "none"};
`;

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <MainDiv>
      <LeftDiv>
        <LowerDiv>
          <img
            src="https://i.pinimg.com/originals/1b/91/39/1b913923c2517304d00324b174b7433f.jpg"
            alt=""
          />
        </LowerDiv>
        <UpperDiv>
          <img
            src="https://mcart24.com/media/logo/websites/1/mcart24-logo_1.png"
            alt=""
          />
          <p>
            <BsFillHandbagFill style={{ marginRight: "5px" }} />
            Create your shopping list
          </p>
          <p>
            <IoMdNotifications style={{ marginRight: "5px" }} />
            Get rewards on your purchases
          </p>
          <p>
            <BsFillHeartFill style={{ marginRight: "5px" }} />
            Amazing offers on Amazon, Flipkart
          </p>
          <p>
            <AiOutlineSave style={{ marginRight: "5px" }} />
            Save money
          </p>
          <p>
            <MdDataSaverOff style={{ marginRight: "5px" }} />
            Earn points
          </p>
        </UpperDiv>
      </LeftDiv>
      <RightDiv>
        <InnerDiv>
          <Title>
            {isLoggedIn ? "Log in to your account" : "Create an account"}
          </Title>
          <P1>
            Compare across 500+ stores <br />
            to find the best price.
          </P1>
          <Div1>
            <input type="string" name="first_name" placeholder="First name" />
          </Div1>
          <Div1>
            <input type="string" name="last_name" placeholder="Last name" />
          </Div1>
          <Div1>
            <input type="email" name="email" placeholder="Email" />
          </Div1>
          <Div1>
            <input type="password" name="password" placeholder="Password" />
          </Div1>
          <Div2 isLoggedIn={isLoggedIn}>
            <label>Are you: </label>
            <input type="radio" name="areYou" value="employee" />
            <label for="employee">Employee</label><br />
            <input type="radio" id="css" name="areYou" value="customer" />
            <label for="customer">Customer</label><br />
          </Div2>
          <ForgotP isLoggedIn={isLoggedIn}>Forgot Password?</ForgotP>
          <Button>{"Sign Up"}</Button>
          <P2>or</P2>
          <SocialIcons>
            <img
              src="https://modesens.com/static/img/login-icon/20210617google.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617apple.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
              alt=""
            />
          </SocialIcons>
          <P3>{"Already have an account? Please Sign in."}</P3>
          <P4 isLoggedIn={isLoggedIn}>
            By creating an account, I agree to <br />
            the Terms of Use and the Privacy Policy
          </P4>
        </InnerDiv>
      </RightDiv>
    </MainDiv>
  );
};

export default Login;
