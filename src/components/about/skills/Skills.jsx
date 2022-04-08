import React from "react";
import { SkillsAbout } from "./../../../utils/helpers";
import style from "./Skills.module.css";
import useFetch from "../../../hooks/useFetch";
const ABOUT_MAINS_ENDPOINT = "aboutMains";

const Skills = () => {
  const { data } = useFetch(ABOUT_MAINS_ENDPOINT, null);
  return (
    <div className={style.body}>
      {data &&
        data.map((skill, index) => (
          <>
            <SkillsAbout
              key={index}
              title={skill.title_uz}
              num={`${skill.categoryID}`.padStart(2, "0")}
              img={skill.imageUrl}
              desc={skill.description_uz}
              readMore_link={`engine/${skill.id}`}
            />
            <hr width="2" size="700" color="gray" />
          </>
        ))}
    </div>
  );
};

export default Skills;
