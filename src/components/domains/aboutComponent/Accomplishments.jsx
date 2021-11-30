import React from "react";
import "./Accomplishments.css";
import clouds from "../../images/about/mountainPinkClouds.jpg";
import trees from "../../images/about/trees.jpg";

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
        <div className="col-sm-6">
          <img
            src={trees}
            className="d-block w-100 img-fluid"
            alt="looking up from the ground at a pine forest"
          />
        </div>
        <div className="col-sm-6 values">
          <h2 className="section-heading heading">accomplishments</h2>
          <ul>
            {achievements.map((accomp, index) => {
              return (
                <li key={index}>
                  {accomp.accomp}
                  <div className="detail-group">
                    <li className="details">
                      {accomp.where} - {accomp.year}
                    </li>
                    <li className="details">{accomp.award}</li>
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
