import React from "react";
import telkom from "./assets/telkom-indonesia.png";
import mahadatacn from "./assets/mahadatacn.jpeg";
import p2ms from "./assets/p2ms.png";
import dbeaver from "./assets/tools/dbeaver.png";
import gitlab from "./assets/tools/gitlab.svg";
import golang from "./assets/tools/golang.svg";
import jenkins from "./assets/tools/jenkins.svg";
import jira from "./assets/tools/jira.svg";
import kafka from "./assets/tools/kafka.svg";
import node from "./assets/tools/node.svg";
import postgresql from "./assets/tools/postgresql.svg";
import postman from "./assets/tools/postman.svg";
import rancher from "./assets/tools/rancher.svg";
import vault from "./assets/tools/vault.svg";
import vue from "./assets/tools/vue.svg";
import trello from "./assets/tools/trello.svg";
import react from "./assets/tools/react.svg";
import php from "./assets/tools/php.svg";
import github from "./assets/tools/github.svg";
import figma from "./assets/tools/figma.svg";
import flutter from "./assets/tools/flutter.svg";
import metamask from "./assets/tools/metamask.svg";
import firebase from "./assets/tools/firebase.svg";
import supabase from "./assets/tools/supabase.svg";
import gcloud from "./assets/tools/gcloud.svg";
import mysql from "./assets/tools/mysql.png";

export default function WorkExperience() {
  return (
    <>
      <center>
        <h2>Work Experiences</h2>
      </center>

      <div className="list">
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={telkom} alt="telkom" />
            </div>
            <div className="card-right">
              <h2>Telkom Indonesia</h2>
              <p>
                <strong>Backend Developer</strong> - <i>Freelance</i>
              </p>
              <p>January 2023 - now</p>
              <p>Bandung, Indonesia (On Site)</p>
            </div>
          </div>
          <i>
            <u>Project scope:</u>
          </i>{" "}
          Tracking, Monitoring, and Fleet Management System
          <br></br>
          <br></br>
          <i>
            <u>Key Responsibilities:</u>
          </i>
          <ul>
            <li>
              Involved in the development of two products based on the project
              scope:{" "}
              <strong>
                <i>IndiCar</i>
              </strong>{" "}
              (Indonesian Digital Connected Cars) and{" "}
              <strong>
                <i>IFMS</i>
              </strong>{" "}
              (Integrated Fleet Management System) , under the Telkom IoT
              initiative (main website:{" "}
              <strong>
                <a href="https://indicar.id" target="_blank">
                  https://indicar.id
                </a>
              </strong>
              ). These cutting-edge applications (established 2018) provide
              comprehensive analytics on vehicle tracking, tracing, and
              monitoring Driving Behavior. Key Driving Behavior metrics include
              Vehicle Speed, Acceleration, Braking, Fuel Consumption, Ignition
              Events, and Trip Record Data.
            </li>
            <li>
              Handles and maintains a data queue system to support real-time
              data consumption from each vehicle and tracking device (
              <strong>Teltonika</strong>, <strong>Gosuncn</strong>,{" "}
              <strong>Meitrack</strong>, and <strong>Ulbotech</strong>). We
              implement <i>Apache Kafka</i> to deal with massive data queues
              from thousands of devices for each vehicle.
            </li>
            <li>
              Adhering to industry best practices in code writing (e.g. Clean
              Architecture, SOLID, DRY, and KISS), implementing optimization on
              building database (PostgreSQL) queries, and writing unit tests for
              each developed feature with overall line coverage &gt; 85%
              (Telkom’s standard coverage set to 80% at minimum). Line coverage,
              Code smells, and any IntelliSense functionality for writing code
              is monitored using <i>SonarQube</i>.
            </li>
            <li>
              The customers of these products were widely expanded to many
              sectors. such as Mining, Health Services, Police Operations,
              Logistic Industry, and Industrial Energy. The users of These
              products are expanded to any great Island of Indonesia.
            </li>
          </ul>
          <i>
            <u>Tools used:</u>
          </i>
          <div className="tools-list">
            <img src={jira} alt="jira" />
            <img src={gitlab} alt="gitlab" />
            <img src={dbeaver} alt="dbeaver" />
            <img src={node} alt="node" />
            <img src={golang} alt="golang" />
            <img src={jenkins} alt="jenkins" />
            <img src={postman} alt="postman" />
            <img src={kafka} alt="kafka" />
            <img src={postgresql} alt="postgresql" />
            <img src={gcloud} alt="gcloud" />
            <img src={rancher} alt="rancher" />
            <img src={vault} alt="vault" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={telkom} alt="telkom" />
            </div>
            <div className="card-right">
              <h2>Telkom Indonesia</h2>
              <p>
                <strong>Software Developer</strong> - <i>Internship</i>
              </p>
              <p>July 2022 - December 2022</p>
              <p>Bandung, Indonesia (On Site)</p>
            </div>
          </div>
          <i>
            <u>Project scope:</u>
          </i>{" "}
          Smart Public Lightning System (Smart PJU)
          <br></br>
          <br></br>
          <i>
            <u>Key Responsibilities:</u>
          </i>
          <ul>
            <li>
              Involved in the development of the product, named{" "}
              <strong>Smart PJU</strong> (<i>Penerangan Jalan Umum</i>), a
              cutting-edge IoT product focused on intelligent public street
              lighting controlled at a centralized admin panel.
            </li>
            <li>
              This project can send controls of hundreds of Public Lightning
              Street in a real-time sense just on one dashboard panel. The
              controls for example: <i>Relay Status</i>, <i>Brightness</i>,{" "}
              <i>Setting kWh Rate</i>,<i>Maintenance Status</i>, and{" "}
              <i>Schedule ON/OFF</i>.
            </li>
            <li>
              Maintaining Both Frontend and Backend services using Nodejs to
              develop and deliver it faster. Some features are implemented in
              basic algorithms such as <i>trees</i> & <i>stacks</i>.
            </li>
            <li>
              Collaborate and assist with the supervisor directly, who’s the
              Senior Software Developer in Telkom IOT since 2018. The
              application can be accessed via link{" "}
              <strong>
                <a href="https://pju.antares.id" target="_blank">
                  https://pju.antares.id
                </a>
              </strong>
              .
            </li>
          </ul>
          <i>
            <u>Tools used:</u>
          </i>
          <div className="tools-list">
            <img src={trello} alt="trello" />
            <img src={gitlab} alt="gitlab" />
            <img src={dbeaver} alt="dbeaver" />
            <img src={vue} alt="vue" />
            <img src={node} alt="node" />
            <img src={postman} alt="postman" />
            <img src={postgresql} alt="postgresql" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={mahadatacn} alt="mahadatacn" />
            </div>
            <div className="card-right">
              <h2>PT Mahadata Citra Nusantara</h2>
              <p>
                <strong>Full Stack Developer</strong> - <i>Freelance</i>
              </p>
              <p>June 2022 - now</p>
              <p>Bandung, Indonesia (Hybrid)</p>
            </div>
          </div>
          <i>
            <u>Key Responsibilities:</u>
          </i>
          <ul>
            <li>
              The team conducted the management of the kuisioner.com website's
              frontend or backend, with fully manageable to all resources from
              codebase to VM.
            </li>
            <li>
              Contributes to building and publishing the mobile application for
              the various mobile platforms of the kuisioner.com website.
            </li>
            <li>
              Maintaining any updates of needs. This company recently
              established a new service in the healthcare sector. It’s named
              Rheina SIMKLINIK, which can be accessed at{" "}
              <strong>
                <a href="https://rheina.id" target="_blank">
                  https://rheina.id
                </a>
              </strong>
              .
            </li>
          </ul>
          <i>
            <u>Tools used:</u>
          </i>
          <div className="tools-list">
            <img src={figma} alt="figma" />
            <img src={github} alt="github" />
            <img src={dbeaver} alt="dbeaver" />
            <img src={vue} alt="vue" />
            <img src={node} alt="node" />
            <img src={react} alt="react" />
            <img src={php} alt="php" />
            <img src={firebase} alt="firebase" />
            <img src={flutter} alt="flutter" />
            <img src={postman} alt="postman" />
            <img src={mysql} alt="mysql" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-left">
              <img src={p2ms} alt="p2ms" />
            </div>
            <div className="card-right">
              <h2>Pusat Pemodelan dan Simulasi ITB</h2>
              <p>
                <strong>Programmer</strong> - <i>Contract</i>
              </p>
              <p>August 2022 - December 2022</p>
              <p>Bandung, Indonesia (Hybrid)</p>
            </div>
          </div>
          <i>
            <u>Key Responsibilities:</u>
          </i>
          <ul>
            <li>
              The programming team at P2MS ITB was involved in the development
              of a prototype called "dCred," an acronym for "Decentralized
              Credentials." dCred is a Decentralized Application (dApp), which
              is part of Blockchain app that aims to create an NFT of Courses
              Completion (Online) offered on the Teaching Factory platform (
              <strong>
                <a href="https://teachingfactory.net" target="_blank">
                  https://teachingfactory.net
                </a>{" "}
              </strong>
              ).
            </li>
            <li>
              This project was established by collaborating with PT. Inamart
              Sukses Jaya, which is B2B marketplace focused on research and
              development of blockchain implementation at UMKM sector.
            </li>
            <li>
              A Copyright Document (HAKI) of this project was already
              established, can be access{" "}
              <a
                href="https://drive.google.com/file/d/1Ry0tgwJuZL1IJlheTRXxkmXdYtS-UfHP/view"
                target="_blank"
              >
                <strong>here</strong>
              </a>
              .
            </li>
          </ul>
          <div className="tools-list">
            <img src={figma} alt="figma" />
            <img src={react} alt="react" />
            <img src={php} alt="php" />
            <img src={metamask} alt="metamask" />
            <img src={supabase} alt="supabase" />
          </div>
        </div>
      </div>
    </>
  );
}
