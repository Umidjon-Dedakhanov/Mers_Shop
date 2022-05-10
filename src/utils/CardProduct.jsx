import style from './Helpers.module.css';
import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { BsSuitHeartFill } from 'react-icons/bs';
import { like__products, remove__liked__oneproduct } from "../redux/actions/likeActions";
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const CardProduct = (props) => {
  const {liked} = useSelector(state => state.liked);
  const {currency} = useSelector(state => state.currency);
  const addToLiked = (product) => {
    props.like__products(product);
  }

  const removeFromLiked = (product) => {
    props.remove__liked__oneproduct(product?.id)
  }
  return (
    <div className={style.CardProduct}>
      <div className={style.btnGroup}>
        <Link to={props.path}>
          {" "}
          <FiShoppingBag style={{fontSize: 22}}/>
        </Link>
        {liked?.map(i => i.product.id).includes(props.id) ?
       <BsSuitHeartFill style={{color: "red", fontSize: 22}} onClick={() => removeFromLiked(props.product)}/> :   <FiHeart style={{fontSize: 22}} onClick={() => addToLiked(props.product)}/> 
        }
      </div>
      <div className={style.cardImg}>
        <Link to={props.path}>
          <img src={props.img} alt="" />
        </Link>
      </div>
      <div className={style.stars}>
        {
          new Array(5).fill().map((_, index) => 
            <FiStar key={index}/>
          )
        }
      </div>
      <div>
        <h1>{props.desc}</h1>
      </div>
      <div>
        <h2>{ currency === "usd" ?  `${props?.product?.cost_usd} USD` : `${props?.product?.cost_uzs} UZS`}</h2>
      </div>
    </div>
  );
};

export default connect(null, {like__products, remove__liked__oneproduct})(CardProduct)