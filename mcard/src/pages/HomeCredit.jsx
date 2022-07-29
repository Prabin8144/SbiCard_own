import styles from "../CssComponent/homecred.module.css";

import React, { useEffect }  from 'react';
import { getProducts } from '../redux/Todo/action';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';

const HomeCredit = () => {
  const { data } = useSelector((state) => state.todo.todos);
   
    
  const params = useParams();
  console.log(params);

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(data);
  }, [dispatch]);



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
            <div className={styles.cardall} key={el.id}>
                <div>
                    <img src={el.image} alt="" />
                    <h1>{el.title}</h1>
                    <h4>{el.tpye}</h4>
                    <p>{el.description}</p>
                    <Link to={`/HomeCred/${el.id}`}><p style={{color:"blue"}}>Learn More</p></Link>
                    <button>Apply Now</button>
                </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default HomeCredit