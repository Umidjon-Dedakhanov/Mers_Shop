import authApiInstance from "../../api/authApi";
import { ORDER_PRODUCTS_FAILED, ORDER_PRODUCTS, ORDER_PRODUCTS_LOADING } from "./types";
const ORDER_FORM_ENDPOINT = "orderMainsAPI";

export const orderProducts = (order__details, user, user_info) => async dispatch => {
  dispatch({
    type: ORDER_PRODUCTS_LOADING
  });
  authApiInstance.post(ORDER_FORM_ENDPOINT, {
      id: 0,
      basketID: 0,
      basketMain: {
      id: 0,
      count: 0,
      productID: 0,
      status: 0,
      productMain: order__details
      },
      mainUser:[ user], 
      clientID: 0, 
      clientMain: user_info
    })
    .then(response => {
      dispatch({
        type: ORDER_PRODUCTS,
        payload: {
          data: response.data
        }
      })
      console.log(response)
    })
    .catch(err => {
      dispatch({
        type: ORDER_PRODUCTS_FAILED
      })
      console.log(err)
    })
}