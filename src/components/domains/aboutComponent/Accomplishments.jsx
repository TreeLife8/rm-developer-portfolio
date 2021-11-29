import React from "react";
import "./Accomplishments.css";

export default function Accomplishments() {
  const achievements = [
    {
      accomp: "bachelor of science - major in chemistry",
      where: "Macquarie Univsertisy",
      award: "MQRES RTP Scholarship",
      year: 2013,
    },
    {
      accomp: "masters of research - analytical chemistry",
      where: "Macquarie Univsertisy",
      award: "APA Award - Australian Postgraduate Award",
      year: 2016,
    },
    {
      accomp: "PhD - analytical chemistry",
      where: "UNSW",
      award: "RTP Award - Research Training Program Award",
      year: "deferred",
    },
    {
      accomp: "Solo hike 900 km in 1 month - Camino de Santiago",
      where: "Spain",
      award: "",
      year: 2018,
    },
  ];
  return (
    <div className="Accomplishments">
      <div className="row">
        <div className="col-sm-6 values"></div>
        <div className="col-sm-6 values">
          <h2 className="subheading pb-2">accomplishments</h2>
          <ul>
            {achievements.map((accomp, index) => {
              return (
                <li key={index}>
                  {accomp.accomp}
                  <div className="detail-group">
                    <li className="details">{accomp.where}</li>
                    <li className="details">{accomp.award}</li>
                    <li className="details">{accomp.year}</li>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
