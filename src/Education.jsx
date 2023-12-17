import React from "react";
import itb from "./assets/itb.png";
import yabb from "./assets/yabb.jpeg";

export default function Education() {
  return (
    <>
      <center>
        <h2>Education</h2>
      </center>

      <div className="list">
        {/* ITB */}
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={itb} />
            </div>
            <div className="card-right">
              <h2>Institut Teknologi Bandung (ITB)</h2>
              <p>
                <strong>Bachelor of Science (B.Sc), Mathematics</strong> (CGPA
                3.44/4.00, 146 credits)
              </p>
              <p>
                August 2019 - July 2023 (finished final's seminar at February
                2023)
              </p>
              <p>Bandung, Indonesia (On Site)</p>
            </div>
          </div>
          <ul>
            <li>
              <u>Related Coursework</u>:{" "}
              <i>
                Computational Mathematics, Discrete Mathematics, Linear Algebra,
                Data Analysis, Probability & Statistics, Numerical Mathematics,
                Mathematical Modelling, Artificial Intelligence for Business
              </i>
            </li>
            <li>
              <u>Final Project</u>:{" "}
              <i>Local Metric Dimension of Circulant Graph</i>
            </li>
          </ul>
        </div>
        {/* Generasi GIGIH 2.0 */}
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={yabb} />
            </div>
            <div className="card-right">
              <h2>GoTo Impact Foundation</h2>
              <p>
                <strong>
                  Generasi GIGIH 2.0 Graduate - Backend Engineering
                </strong>
              </p>
              <p>February 2022 - June 2022</p>
              <p>Jakarta Metropolitan Area, Indonesia (Remote)</p>
            </div>
          </div>
          <ul>
            <li>
              <u>Learning Scopes</u>:{" "}
              <i>
                OOP in Ruby, Backend App Framework (Ruby on Rails, Sinatra),
                Databases (SQLite), Test Driven Development (TDD) in Ruby, Clean
                Code, and SOLID Principles in Ruby
              </i>
            </li>
            <li>
              <u>Final Project</u>: <i>E-Medical Record API Services</i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
