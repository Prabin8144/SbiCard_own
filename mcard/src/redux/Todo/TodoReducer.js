import {
    GET_Product_REQUESTED,
    GET_Product_SUCCSESS,
    GET_Product_ERROR,
    DELETE_Product,
    ADD_Product,
    
  } from "./actiontype";
  


  const initState = {
    todos: {
      data: [],
      isLoading: false,
      isError: false,
    },
  };



  export const todoReducer = (state = initState, action) => {
    switch (action.type) {
     
      case GET_Product_REQUESTED:
        return {
          ...state,
          todos: {
            isLoading: true,
            isError: false,
            data: [],
          },
        };
  
      case GET_Product_SUCCSESS:
        return {
          ...state,
          todos: {
            isLoading: false,
            isError: false,
            data: action.payload,
          },
        };
  
      case GET_Product_ERROR:
        return {
          ...state,
          todos: {
            isLoading: false,
            isError: true,
            data: [],
          },
        };


         case ADD_Product:
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: action.payload,
        },
      };

    case DELETE_Product:
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: false,
          data: [],
        },
      };
  
      default:
        return state;
    }
  };