import React from "react";
import { useParams } from "react-router-dom";
import share from "../../../assets/news/card/fi_share.png";
import twitter from "../../../assets/news/card/fi_twitter.png";
import instagram from "../../../assets/news/card/fi_instagram.png";
import slack from "../../../assets/news/card/fi_slack.png";
import style from "./Card.module.css";
import useFetch from "../../../hooks/useFetch";
const NEWS_MAIN_ENDPOINT_WITHID = "newsMains";

const CardBlock = ({
  mainImg,
  title,
  date,
  info,
  twitterLink,
  instagramLink,
  slackLink,
  netTxt,
  txt1,
  title2,
  txt2,
  txt3,
  img2,
  img2Txt,
  txt4,
  img3,
  txt5,
}) => {
  const params = useParams();
  console.log(params)
  const { data } = useFetch(`${NEWS_MAIN_ENDPOINT_WITHID}/${+params.id}`, null)
  console.log(data  )
  return (
    <div className={style.body}>
      <div className={style.headerBLock}>
        <img src={data?.imageUrl} alt="" />
        <div className={style.headerText}>
          <h1>{data?.title_en}</h1>
          <h2>{data?.updated?.split("T")[0]}</h2>
          <h3>{data?.description_en}</h3>
        </div>
      </div>
      <div className={style.main}>
        <hr style={{ width: "100%" }} />
        <div className={style.network}>
          <div className={style.networkLink}>
            <p>Share on:</p>
            {/* <a href=""><img src={share} alt="" /></a> */}
            <img src={share} alt="" />
            <a href={twitterLink}>
              <img src={twitter} alt="" />
            </a>
            <a href={instagramLink}>
              <img src={instagram} alt="" />
            </a>
            <a href={slackLink}>
              <img src={slack} alt="" />
            </a>
          </div>
          <p className={style.networkLinkP}>{netTxt}</p>
        </div>
        <hr style={{ width: "100%" }} />
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <div className={style.mdlTxt}>
          <h1>{data.newsCategory?.title_en}</h1>
          <p className={style.txt + " " + style.mdlTxtP}>{data.newsCategory?.description_en + data.newsCategory?.description_en}</p>
        </div>
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <img className={style.img2} src={data.newsCategory?.imageUrl} alt="" />
        <p className={style.txt + " " + style.img2Txt}>{data.newsCategory?.description_en}</p>
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <img className={style.imgLeft} src={data.newsCategory?.imageUrl} alt="" />
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <div className={style.end}>
          <hr style={{ width: "100%" }} />

          <div className={style.networkLink}>
            <p>Share on:</p>
            {/* <a href=""><img src={share} alt="" /></a> */}
            <img src={share} alt="" />
            <a href={twitterLink}>
              <img src={twitter} alt="" />
            </a>
            <a href={instagramLink}>
              <img src={instagram} alt="" />
            </a>
            <a href={slackLink}>
              <img src={slack} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export { CardBlock}