// import logo from './logo.svg';
import React, { useState } from "react";
import CreditCardForm from "./CreditCardForm";
import CreditCard from "./CreditCard";



function CardApp() {
  const [data,setData] = useState({});
  return (
    <>
    <div className="App">
      <CreditCard data={data} setData={setData}/>
      <CreditCardForm data={data} setData={setData}/>
    </div>

      
    </>
  );
}

export default CardApp;
