import React, { useRef, useState } from "react";
import styles from "../CssComponent/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className={styles.swipe}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <ol>
                Login
                <li>Login to your card</li>
                <li>Put your name</li>
                <li>Enter mobile number</li>
                <li>Enter mail address</li>
                <li>Accept all the terms And condition</li>
              </ol>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swipe}>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div>
              <ol>
                Benifits
                <li>Lowetr Interest</li>
                <li>Encash</li>
                <li>Utility Bill Payment</li>
                <li>Easy Access</li>
                <li>Insurance</li>
                <li>Other Benifits</li>
              </ol>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swipe}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAUApi9ViQ2blLoNtm1Ne54JqRJB4mOrVN5A&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <ol>
                Pay
                <li>Pay Online</li>
                <li>Pay Offline</li>
                <li>Useful Links</li>
                <li>Easy for Pying</li>
              </ol>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swipe}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPGEj_iOr47qlzRtmgfuI51kOrtwHgcPVNQ&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <ol>
                Offers
                <li>All Offers</li>
                <li>Offers this Week</li>
                <li>Visa Offers on Mcard</li>
                <li>Convert to EMI</li>
                <li>Mcard Hloiday Offers</li>
              </ol>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.swipe}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhroaDmyCTvXesxSsxmEwe153jnc0Ckj87A&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <ol>
                Rewards
                <li>Know Rewards Point</li>
                <li>Earning Rewards Point</li>
                <li>Redeeming Rewards Points</li>
              </ol>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
