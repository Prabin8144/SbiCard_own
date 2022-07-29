import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../CssComponent/homecred.module.css"
import data from "../data.json"
const HomeCredit = () => {
  return (
    <>
        
        <div className={styles.lpol}>
          <h1>MCard All In One</h1>
          <p>
            Bank on-the-go with a host of banking services offered across <br />
            multiple device platforms
          </p>
        </div>
        <div className={styles.locard}>
        {data.map((el)=>(
            <div className={styles.cardall}>
                <div>
                    <img src={el.image} alt="" />
                    <h1>{el.title}</h1>
                    <h4>{el.tpye}</h4>
                    <p>{el.description}</p>
                    <Link to="/cardpage"><p style={{color:"blue"}}>Learn More</p></Link>
                    <button>Apply Now</button>
                </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default HomeCredit