import React from "react";
import "./Values.css";

export default function Values() {
  const values = ["kindness", "understanding", "authentisity"];
  return (
    <div className="Values">
      <div className="row">
        <div className="col-sm-6 values-bio">
          <h2 className="heading">values</h2>
          <ul>
            {values.map((value, index) => {
              return (
                <li className="value" key={index}>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-sm-6 values">
          <h2 className="heading">kindness understanding honesty</h2>
        </div>
      </div>
    </div>
  );
}
