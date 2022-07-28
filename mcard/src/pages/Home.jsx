import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import styles from "../CssComponent/home.module.css"
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
     <Navbar/> 
     <div className={styles.main}>
          <div className={styles.data}>
            <h1 >MCard All In One</h1>
            <p>Bank on-the-go with a host of banking services offered across <br />
multiple device platforms</p>
            <p>SMS MCARD to 56161600 to receive the download link</p>
          </div >
          <div className={styles.imgs}>
            <img src="https://i.pinimg.com/736x/76/10/32/76103274820352031eb319e4f9e7dda1.jpg" alt="" />
          </div>
     </div>
     <div className={styles.ris1}>
     <div className={styles.ris}>
      <h1>Mcard Smart Work</h1>
      <p>Mcard is a safe and secure credit card application from Masai Bank, with 100+ features and services <br /> satisfying more than just banking needs. It is a convenient <br />  way to access account, transfer funds, pay bills, link other bank accounts using UPI and more such exciting features on the go. Simply follow these steps to active and get started with credit paying.</p>
     </div>
     </div>
     <div className={styles.here}>
         <div>
          <h2>Download The Mcard App</h2>
          <p>Download the Mcard App in just a few clicks on your phone. Download Mcard App via <br /> the Google Play Store or the Apple App Store. You can also <br /> SMS or call us on our toll-free number as shown below to receive
                                        the download link.
                                    </p>
         </div>
         <div>
           <h2>Register Through Mcard App</h2>
          <p>The Mcard App provides an mPIN facility to keep all your transactions secure. <br /> As an added verification, provide authentication through your Internet Banking details, <br /> Debit Card details or OTP to use any feature on theMcard App. Complete these two levels of registration onMcard App by following the steps as shown below.</p>
          </div>
         <div>
          <h2>Eligibilty </h2>
          <ul>
            <li>New Coustomer</li>
            <li>Having Other Card</li>
            <li>Intrested for Online Shopping</li>
            <li>StandAlone Coustomer having CreditCard/loan</li>
          </ul>
          </div>
     </div>
     <div className={styles.btnio}>
      <Link to="/login"><h4 style={{crusor:"pointer"}}>Pay Utility Bills</h4></Link>
     </div>
     <div>
      <Slider/>
     </div>
     <div className={styles.lop}>
       <h4>Go With Mcard</h4>
       <p>Enjoy your life</p>
     </div>
     <Footer/>
    </>
  )
}

export default Home