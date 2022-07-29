import styles from "../CssComponent/homecred.module.css";

import React, { useEffect } from "react";
import { getProducts } from "../redux/Todo/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const HomeCredit = () => {
  let user = JSON.parse(localStorage.getItem("auth")) || [];
  console.log(user, "user");

  const { data } = useSelector((state) => state.todo.todos);
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log(data);
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.lpol}>
        <h1>MCard All In One</h1>
        <p>
          Bank on-the-go with a host of banking services offered across <br />
          multiple device platforms
        </p>
      </div>
      <h2
        style={{
          margin: "auto",
          width: "85%",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        All Credit Cards
      </h2>
      <div className={styles.locard}>
        {data.map((el) => (
          <div className={styles.cardall} key={el.id}>
            <div>
              <img src={el.image} style={{ marginTop: "20px" }} alt="" />
              <h1>{el.title}</h1>
              <h4>{el.tpye}</h4>
              <p>{el.description}</p>
              <Link
                to={`/HomeCred/${el.id}`}
                style={{ textDecoration: "none" }}
              >
                <p style={{ color: "#0F9BDB", fontSize: "13px" }}>Learn More</p>
              </Link>
              <button onClick={() => navigate("/form")} style={{display: !user.first_name && "none"}}>Apply Now</button>
              <button onClick={() => navigate("/login")} style={{display: user.first_name && "none"}}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCredit;
