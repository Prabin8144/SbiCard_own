import React from "react";
import styles from "../CssComponent/Footer.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

import { BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.prefooter}>
        <div className={styles.logos}>
          <div className={styles.NavBarCart}>
            <BsInstagram style={{ margin: "11px 11px" }} />
          </div>
          <div className={styles.NavBarCart}>
            <FaFacebookF style={{ margin: "11px 11px" }} />
          </div>
          <div className={styles.NavBarCart}>
            <BsTwitter style={{ margin: "11px 11px" }} />
          </div>
          <div className={styles.NavBarCart}>
            <GrYoutube style={{ margin: "11px 11px" }} />
          </div>
        </div>
        <div className={styles.icimg2}>
          <img
            src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            alt=""
          />
          <img
            src="	https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            alt=""
          />
        </div>
        <hr style={{ width: "80%", margin: "auto" }} />
      </div>

      <div className={styles.containermain}>
        <div className={styles.gridFoot}>
          <div className={styles.lo}>
            <img
              src="https://mcart24.com/media/logo/websites/1/mcart24-logo_1.png"
              alt=""
              onClick={()=>navigate("")}
            />
          </div>
          <div>
            <p className={styles.ppara}>Credit Cards</p>
            <div className={styles.ppa}>
              <p>Lifestyle</p>
              <p>Reward</p>
              <p>Shoppinng</p>
              <p>Travel & Fuel</p>
              <p>Banking Patnership</p>
              <p>Business</p>
              <p>Digitilize Membership kit</p>
            </div>
          </div>
          <div>
            <p className={styles.ppara}>Benifits</p>
            <div className={styles.ppa}>
              <p>lowetr Interest</p>
              <p>Encash</p>
              <p>Utility Bill Payment</p>
              <p>Easy Access</p>
              <p>Insurance</p>
              <p>Other Benifits</p>
            </div>
          </div>
          <div>
            <p className={styles.ppara}>Pay</p>
            <div className={styles.ppa}>
              <p>Pay Online</p>
              <p>Pay Offline</p>
              <p>Useful Links</p>
            </div>
          </div>

          <div>
            <p className={styles.ppara}>Offers</p>
            <div className={styles.ppa}>
              <p>All Offers</p>
              <p>Offers this Week</p>
              <p>Convert to EMI</p>
              <p>Visa Offers on Mcard</p>
            </div>
          </div>

          <div>
            <p className={styles.ppara}>Rewards</p>
            <div className={styles.ppa}>
              <p>Know Rewards Point</p>
              <p>Earning Rewards Point</p>
              <p>Redeeming Rewards Points</p>
            </div>
          </div>
        </div>
        <div className={styles.copy}>
          Copyright © 2011-2022 <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
