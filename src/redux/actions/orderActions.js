import authApiInstance from "../../api/authApi";
import axios from "axios";
import { authHeaders } from "../../utils/authHeaders";
import { ORDER_PRODUCTS_FAILED, ORDER_PRODUCTS, ORDER_PRODUCTS_LOADING } from "./types";
const ORDER_FORM_ENDPOINT = "orderMainsAPI";

export const orderProducts = (productMain, quantity, user, user_info, cart) => async dispatch => {
  // console.log(productMain)
  // console.log(quantity)
  // console.log(user)
  // console.log(user_info)
  // productMain.id = 0;
  // productMain.productCategory.id = 0;
  // productMain.productCategory.parentId = 0;
  // productMain.categoryID = 0;
  // productMain.id = 0;
  // productMain.homeTopProduct[0].id = 0;
  // productMain.productNews[0].productID = 0;
  // productMain.productNews[0].id = 0;
  // productMain.orderMain[0].id = 0;
  // productMain.orderMain[0].productID = 0;
  // productMain.productNews[0].productID = 0;




  dispatch({
    type: ORDER_PRODUCTS_LOADING
  });
  console.log(cart)
  user.userID = 0;
  user.mainRole.roleId = 0

  let pr = [];
  cart.forEach(i => 
   { i.product.id = 0;
    i.product.productCategory.id = 0;
    i.product.productCategory.parentId = 0;
    i.product.categoryID = 0;
    i.product.id = 0;
    i.product.homeTopProduct[0].id = 0;
    i.product.homeTopProduct[0].productID = 0;
    i.product.productNews[0].productID = 0;
    i.product.productNews[0].id = 0;
    i.product.orderMain = [];
    i.product.productNews[0].productID = 0;
    pr.push(i)
  }
  )

  console.log(pr  )

  axios.all(pr?.map(orderItem =>
    axios.post(`https://api.mshop.softcity.uz/api/orderMainsAPI`, 
    {
        id: 0,
        productID: 0,
        count: orderItem.quantity,
        status: 3,
        productMain: orderItem?.product,
        clientID: 0,
        clientMain: {
          id: 0,
          fname: user_info.fname,
          lname: user_info.lname,
          address: user_info.address,
          phone: user_info.phone,
          email: user_info.email,
          mainUser: [
            user
          ]
        }
    },
    {
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : authHeaders(),
          "Accept": "*/*",
          "Access-Control-Allow-Origin" : "*"
        }
    }
  )
    ))
  authApiInstance.post(ORDER_FORM_ENDPOINT, {
      id: 0,
      productID: 0,
      count: quantity,
      status: 3,
      productMain,
      clientID: 0,
      clientMain: {
        id: 0,
        fname: user_info.fname,
        lname: user_info.lname,
        address: user_info.address,
        phone: user_info.phone,
        email: user_info.email,
        mainUser: [
          user
         ]
    }
  }
  )
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