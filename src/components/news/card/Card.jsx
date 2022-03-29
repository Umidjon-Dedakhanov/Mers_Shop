import React from "react";
import { Route } from "react-router-dom";

import share from "../../../assets/news/card/fi_share.png";
import twitter from "../../../assets/news/card/fi_twitter.png";
import instagram from "../../../assets/news/card/fi_instagram.png";
import slack from "../../../assets/news/card/fi_slack.png";
import one from "../../../assets/news/card/one.png";
import two from "../../../assets/news/card/two.png";
import main from "../../../assets/news/card/main.png";

import style from "./Card.module.css";

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
  return (
    <div className={style.body}>
      <div className={style.headerBLock}>
        <img src={mainImg} alt="" />
        <div className={style.headerText}>
          <h1>{title}</h1>
          <h2>{date}</h2>
          <h3>{info}</h3>
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
        <p className={style.txt}>{txt1}</p>
        <div className={style.mdlTxt}>
          <h1>{title2}</h1>
          <p className={style.txt + " " + style.mdlTxtP}>{txt2}</p>
        </div>
        <p className={style.txt}>{txt3}</p>
        <img className={style.img2} src={img2} alt="" />
        <p className={style.txt + " " + style.img2Txt}>{img2Txt}</p>
        <p className={style.txt}>{txt4}</p>
        <img className={style.imgLeft} src={img3} alt="" />
        <p className={style.txt}>{txt5}</p>
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

export const Card = () => {
  return (
    <Route
      path="/new/1"
      component={() => (
        <CardBlock
          mainImg={main}
          title={"Hong Kong news website to shut after police raid"}
          date={"12.12.2021"}
          info={
            "The US and several European countries have reported their highest daily rises in Covid cases since the pandemic began, as the Omicron variant spreads."
          }
          netTxt={
            "Stand News: Independent outlet to close after senior staff arrested"
          }
          txt1={`Seven people, both current and former employees, were detained by Hong Kong police for "conspiracy to publish seditious publications". "Because of the situation, Stand News is ceasing operations immediately," the organisation said in a Facebook post. More than 200 police officers were sent to raid the publication's office. Hong Kong police said in a statement they were authorised to "search and seize relevant journalistic materials".
          In a post on Facebook, Stand News said it would no longer be updating its website and would be removing its social media content "within a day". "This morning, the police arrested a number of senior and former senior staff of the company, [and] took many people away to assist in the investigation," the statement reads. It adds that computers and documents were seized from its office and that it would be assisting the police with their inquiry. Those arrested - three men and four women - are aged between 34 and 73 years old.`}
          title2={
            "One of the last pro-democracy media organisations in Hong Kong, Stand News, is shutting down after it was raided by police and senior staff were arrested."
          }
          txt2={`
          They include the former and acting chief editors of Stand News, Chung Pui-kuen and Patrick Lam, as well as pop star turned democracy icon Denise Ho, who was a former board member. Other board members Margaret Ng, Christine Fang and Chow Tat-chi were also among those arrested. The identity of the seventh person detained has not yet been reported. Chief Secretary of police John Lee said during a press conference on Wednesday afternoon that he supported the police operation against the news outlet and there would be "zero tolerance of behaviour that threatens national security".
"Making use of media work as a tool to pursue their political purpose or other interests contravenes the law, particularly offences that endanger national security," he said.
Footage posted on Stand News' Facebook page showed multiple police officers at the door of deputy assignment director Ronson Chan early Wednesday morning.`}
          txt3={`Mr Chan was not arrested but he was taken in for questioning by police. The night before, Mr Chan had hosted the annual dinner of the Hong Kong Journalists Association (HKJA), of which he is chairperson. In a speech, he referenced the closure of Apple Daily, saying that the incident had "shaken" Hong Kong. He concluded by saying the city would "always need the truth and always need journalists... no matter how difficult the road ahead is, the [HKJA] will not fall down".
          Earlier this year, hundreds of police raided the premises of the now defunct Apple Daily - a publication known for being a vocal critic of the Hong Kong and Chinese leadership. Its assets were frozen, executives were detained and the paper shut down soon after. Its closure left Stand News as one of the last openly pro-democratic publications in the city. It was among a handful of relatively new online news portals that especially gained prominence during the 2019 pro-democracy protests.
          Today's arrests also come a day after media tycoon Jimmy Lai, the founder of Apple Daily, was slapped with the same charge even as he serves a jail sentence for a litany of separate charges against him.`}
          img2={one}
          img2Txt={"Patrick Lam was among those arrested by police"}
          txt4={`A few days after the closure of Apple Daily, Stand News stopped accepting donations from readers, saying they did not want to accept donors' funds in the event that they were shut down - amongst other measures instilled. One staff member who does not want to be named said today he felt calm, as it was expected. "I hope everyone will be safe and press freedom is not a crime," he said, but didn't want to respond when asked if he felt worried about his own safety and that of his 60 colleagues.
          Hong Kong was once a beacon of press freedom in Asia, but now, with only a handful of independent news websites and publications left, one cannot help but wonder which outlet might come next. The Committee to Protect Journalists have condemned the arrests, with its Asia program coordinator Steven Butler calling them "an open assault on Hong Kong's already tattered press freedom, as China steps up direct control over the former colony".
          Meanwhile, HKJA said in a statement that it was "deeply concerned" about Wednesday's incident, and urged "the government to protect press freedom in accordance with the Basic Law."
          The Basic Law, which came into effect when Hong Kong was handed back to China from Britain, protects rights such as freedom of assembly and freedom of speech.`}
          img3={two}
          txt5={`A few days after the closure of Apple Daily, Stand News stopped accepting donations from readers, saying they did not want to accept donors' funds in the event that they were shut down - amongst other measures instilled. One staff member who does not want to be named said today he felt calm, as it was expected. "I hope everyone will be safe and press freedom is not a crime," he said, but didn't want to respond when asked if he felt worried about his own safety and that of his 60 colleagues.
          The Basic Law, which came into effect when Hong Kong was handed back to China from Britain, protects rights such as freedom of assembly and freedom of speech.`}
        />
      )}
    />
  );
};
