import moment from "moment";
import React, { useEffect, useState } from "react";

const About = ({ aboutUs, businessHours }: { aboutUs: any, businessHours: Array<any> }) => {

  return (
    <div>
      <div className="line" />
      <div className="pt-3 service-section" id="about">
        <h2 className="titleh2">About</h2>
        <p className="font14">{aboutUs}</p>
      </div>
      <div className="line" />
      <div className="pt-3" id="about">
        <h2 className="titleh2">Opening Times</h2>
        <ul className="office_open dark">
          {
            (businessHours || []).map((rec:any,index:number)=>{
              return (
                <li key={index} className={ rec.isSelected?"selected":""} >
                {rec.day} <span>{rec.label}</span>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default About;
