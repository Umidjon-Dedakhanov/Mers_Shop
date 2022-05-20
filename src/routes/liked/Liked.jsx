import React from 'react';
import { connect, useSelector } from 'react-redux';
import classes from './Liked.module.css';
import {remove__liked__oneproduct } from '../../redux/actions/likeActions';
import { addToCart } from "../../redux/actions/cartActions";
import AccountProduct from '../account/account-product/AccountProduct';
import PropTypes from "prop-types";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { AiFillStar } from 'react-icons/ai'

const Liked = (props,{tableHeaders}) => {
  const { currency } = useSelector(state => state.currency);
  const {liked} = useSelector(state => state.liked)
  console.log(liked)

  return (
    <div className={classes.liked}>
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
                  <span>
                    <FiTrash2 className={classes.i}/>
                    Ochirish
                  </span>
                  <span>
                    <FiShoppingBag className={classes.i}/>
                    Qoshish
                  </span>
              </div>
            </div>
        )
      }
    </div>
  )
}

AccountProduct.propTypes = {
  data: PropTypes.array,
  tableHeaders: PropTypes.array,
  details: PropTypes.bool,
};


export default connect(null, {remove__liked__oneproduct, addToCart})(Liked);