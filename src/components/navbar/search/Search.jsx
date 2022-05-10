import React from "react";
import { useState } from "react";
import useSearch from "../../../hooks/useSearch";
import style from "./Search.module.css";
import { BiLoaderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const SEARCH_API_ENDPOINT = "Search";
export const Search = ({outside}) => {
  const [searchText, setSearchText] = useState('');
  const { currency } = useSelector(state => state.currency)
  const { searchedProduct, loading } = useSearch(SEARCH_API_ENDPOINT, searchText);
  return (
    <>
    <div className={style.search_block}>
      <input type="search" placeholder="Search product" value={searchText} onChange={e => setSearchText(e.target.value)}/>
      <div className={style.icon}></div>
    </div>

   {
      searchText.replace(/ /g, "").length > 0 && !outside ? <div className={style.search__results}>
        {!loading ?
          searchedProduct.map(product => 
            <Link className={style.search__link} onClick={() => setSearchText('')} to={`/product/${product.id}`}>
              <div className={style.result__product}>
                <img src={product.imageUrl} alt="" />
                <div className={style.product__infosearch}>
                <h2>{product.name_en}</h2>
                <p>{currency?.toUpperCase()} { currency === "usd" ? product.cost_usd : product.cost_uzs}</p>
                </div>
            </div>  
            </Link>
          ) : <BiLoaderAlt className={style.loader}/>
        }
      </div>  : <></>
    }
    </>
  );
};
