import React, { useRef, useState } from "react";
import styles from "../CssComponent/home.module.css"
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU" alt="" />
                </div>
                <div>
                    <ol>Login
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU" alt="" />
                </div>
                <div>
                    <ol>Login
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU" alt="" />
                </div>
                <div>
                    <ol>Login
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU" alt="" />
                </div>
                <div>
                    <ol>Login
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxp3IiPNsxSoVg_o6UlBGp_aqoKclkvvv9g&usqp=CAU" alt="" />
                </div>
                <div>
                    <ol>Login
                        <li>Login to your card</li>
                        <li>Put your name</li>
                        <li>Enter mobile number</li>
                        <li>Enter mail address</li>
                        <li>Accept all the terms And condition</li>
                    </ol>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}