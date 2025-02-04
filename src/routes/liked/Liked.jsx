import React from 'react';
import { connect, useSelector } from 'react-redux';
import classes from './Liked.module.css';
import {remove__liked__oneproduct } from '../../redux/actions/likeActions';
import { addToCart } from "../../redux/actions/cartActions";
import AccountProduct from '../account/account-product/AccountProduct';
import PropTypes from "prop-types";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from 'react-icons/ai'
import AccountEmpty from '../account/account-empty/AccountEmpty'

const Liked = (props,{tableHeaders}) => {
  const { currency } = useSelector(state => state.currency);
  const {liked} = useSelector(state => state.liked)
  console.log(liked)

  const removeFromLiked = (product) => {
    props.remove__liked__oneproduct(product?.id)
  }

  const handleAddToCart = (product) => {
    props.addToCart(product)
  }

  return (
   liked.length > 0 ? <div className={classes.liked}>
      {
        liked?.map(({product}) => 
            <div className={classes.likedproduct}>
              <div className={classes.product_container}>
              <img src={product?.imageUrl} alt="" />
              <div className={classes.likedproduct__info}>
              <h3>{product?.name_en}</h3>
              <h4>{currency?.toUpperCase()} { currency === "usd" ? product?.cost_usd : product?.cost_uzs}</h4>
              <p>{product?.description_en}</p>
              <div className={classes.product__ratings}>
                      {!tableHeaders ? (
                        new Array(product.productRatings)
                          .fill()
                          .map((_, index) => <AiFillStar key={index} />)
                      ) : (
                        <></>
                      )}
                </div>
                <h4 className={classes.cost}>{product?.cost_usd ? "$" + product?.cost_usd : "UZS" + product.cost_uzs}</h4>
              </div>
              </div>
              <div className={classes.option_details}>
                  <span style={{cursor: "pointer", userSelect: "none"}} onClick={() => removeFromLiked(product)}>
                    <FiTrash2 className={classes.i}/>
                    Ochirish
                  </span>
                  <span style={{cursor: "pointer", userSelect: "none"}} onClick={() => handleAddToCart(product)}>
                    <FiShoppingBag className={classes.i}/>
                    Qoshish
                  </span>
              </div>
            </div>
        )
      }
    </div> : <div style={{marginTop: "150px"}}><AccountEmpty /></div> 
  )
}

AccountProduct.propTypes = {
  data: PropTypes.array,
  tableHeaders: PropTypes.array,
  details: PropTypes.bool,
};


export default connect(null, {remove__liked__oneproduct, addToCart})(Liked);