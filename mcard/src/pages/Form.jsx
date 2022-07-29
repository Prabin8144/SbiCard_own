import React, { useState } from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

const Div = styled.div`
margin-bottom: 30px;
  input {
    width: 240px;
    height: 35px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid black;
    padding-left: 10px;
    font-size: 14px;
    box-sizing: border-box;
    &:focus {
      border: 2px solid #0066ee;
    }
  }
  button {
    width: 240px;
    height: 44px;
    background: #0066ee;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    &:hover {
      background: black;
    }
  }
`;
const AlertDiv = styled.div`
  margin-top: 20px;
  margin: auto;
  display: ${(props) => (props.error ? "flex" : "none")};
`;
const AlertDiv2 = styled.div`
  margin-top: 20px;
  margin: auto;
  display: ${(props) => (props.success ? "flex" : "none")};
`;

const Form = () => {
  let user = JSON.parse(localStorage.getItem("auth")) || [];
  console.log(user, "user");
  const [form, setForm] = useState({ id: user.id });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form, "form");
  };
  const handleSubmit = (e) => {
    let payload = JSON.stringify(form);
    console.log(form);
    fetch(`http://localhost:8080/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) {
          setError(true);
          setSuccess(false);
          console.log(res.errors);
        }
        if (res.data) {
          setError(false);
          setSuccess(true);
          console.log(res.data);
        }
      })
      .catch((e) => {
        // console.log(e)
        setError(true);
        console.log(error);
      });
  };
  return (
    <div style={{ width: "60%", margin: "auto", marginTop: "30px" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Please Fill In Your Details</h1>
      </div>
      <Div style={{ textAlign: "center" }}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="dob"
          placeholder="Date of Birth(dd/mm/yyyy)"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="adhar"
          placeholder="Adhar No"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="pan"
          placeholder="PAN No"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
      </Div>
      <AlertDiv error={error}>
        <Alert style={{ width: "210px",margin:"auto" }} severity="error">
          Invalid details!
        </Alert>
      </AlertDiv>
      <AlertDiv2 success={success}>
        <Alert style={{ width: "210px",margin:"auto" }} severity="success">
          Signup successful!
        </Alert>
      </AlertDiv2>
    </div>
  );
};

export default Form;
