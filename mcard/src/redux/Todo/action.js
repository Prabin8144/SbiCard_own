import axios from "axios";

import { ADD_Product, DELETE_Product, GET_Product_ERROR, GET_Product_REQUESTED, GET_Product_SUCCSESS } from "./actiontype";







//Get Data
export const getProductRequested = () => ({
  type: GET_Product_REQUESTED,
});

export const getProductSuccess = (payload) => ({
  type: GET_Product_SUCCSESS,
  payload,
});

export const getProductError = () => ({
  type: GET_Product_ERROR,
});


export const addcart = (payload)=>({
  type:ADD_Product,
  payload,
})

// export const deletecart = (payload)=>({
//   type:DELETE_Product,
//   payload,
// })




export const getProducts = () => async (dispatch) => {
  dispatch(getProductRequested());
  try {
    let res = await axios.get("http://localhost:4000/data");
    let data = await res.data;

    dispatch(getProductSuccess(data));
  } catch (err) {
    dispatch(getProductError());
  }
};


// add to cart..

let userData;

export const toCart = (id, mobile) => async (dispatch) => {
  try {
    let res = await axios.get(
      `http://localhost:4000/data/${id}`
    );
    let data = await res.data;
    dispatch(addcart(data));
  } catch (error) {
    console.log(error);
  }
};

//deleting the product
export const deletecart = (payload) => ({
  type: DELETE_Product,
  payload,
});

export const deleteProduct = (data, id) => async (dispatch) => {
  dispatch(deletecart(data));

  try {
    let patch = await fetch(
      `http://localhost:4000/data/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: [...data],
        }),
      }
    );
    let removedData = await patch.json();
    console.log(removedData);
  } catch (err) {
    console.log(err);
  }
};
