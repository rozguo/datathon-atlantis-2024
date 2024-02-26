import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import "./team.css";
const Team = () => {
  const jenny = require("./data-memebers/jenny-tran.png");
  const ellie = require("./data-memebers/ellie-lee.jpg");
  const emi = require("./data-memebers/emi-cervantes.png");
  const ashley = require("./data-memebers/ashley-yung.png");
  const katherine = require("./data-memebers/katherine-frields.png");
  const azra = require("./data-memebers/azra-zahin.png");
  const nathan = require("./data-memebers/nathan-samarasena.png");
  const rosalind = require("./data-memebers/rosalind.jpg");
  const shreya = require("./data-memebers/shreya-shyam.png");
  const jake = require("./data-memebers/jake-silverman.png");
  const natalie = require("./data-memebers/natalie-nguyen.png");
  const kaylie = require("./data-memebers/kaylie-chong.png");
  const will = require("./data-memebers/william-hou.png");
  const gordon = require("./data-memebers/gordon-lin.png");
  const elane = require("./data-memebers/elane-shane.jpg");
  const megan = require("./data-memebers/megan-le.jpg");
  const catelynn = require("./data-memebers/catelynn-chen.jpg");
  return (
    <div
      className="team-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Meet Our Team</h1>
      <div className="team-view">
        <div className="image-grid">
          <div id="member-card">
            <img src={jenny} id="board-headshot"></img>
            <h4>Jenny Tran</h4>
          </div>
          <div id="member-card">
            <img src={ellie} id="board-headshot"></img>
            <h4>Elizabeth Lee</h4>
          </div>
          <div id="member-card">
            <img src={emi} id="board-headshot"></img>
            <h4>Emi Cervantes</h4>
          </div>
          <div id="member-card">
            <img src={gordon} id="board-headshot"></img>
            <h4>Gordon Lin</h4>
          </div>
          <div id="member-card">
            <img src={catelynn} id="board-headshot"></img>
            <h4>Catelynn Chen</h4>
          </div>
          <div id="member-card">
            <img src={will} id="board-headshot"></img>
            <h4>William Hou</h4>
          </div>
          <div id="member-card">
            <img src={kaylie} id="board-headshot"></img>
            <h4>Kaylie Chong</h4>
          </div>
          <div id="member-card">
            <img src={nathan} id="board-headshot"></img>
            <h4>Nathan Samarasena</h4>
          </div>
          <div id="member-card">
            <img src={shreya} id="board-headshot"></img>
            <h4>Shreya Shyam</h4>
          </div>
          <div id="member-card">
            <img src={jake} id="board-headshot"></img>
            <h4>Jake Silverman</h4>
          </div>
          <div id="member-card">
            <img src={rosalind} id="board-headshot"></img>
            <h4>Rosalind Guo</h4>
          </div>
          <div id="member-card">
            <img src={elane} id="board-headshot"></img>
            <h4>Elane Elza Shane</h4>
          </div>
          <div id="member-card">
            <img src={megan} id="board-headshot"></img>
            <h4>Megan Le</h4>
          </div>
          <div id="member-card">
            <img src={ashley} id="board-headshot"></img>
            <h4>Ashley Yung</h4>
          </div>
          <div id="member-card">
            <img src={natalie} id="board-headshot"></img>
            <h4>Natalie Nguyen</h4>
          </div>
          <div id="member-card">
            <img src={katherine} id="board-headshot"></img>
            <h4>Katherine Frields</h4>
          </div>
          <div id="member-card">
            <img src={azra} id="board-headshot"></img>
            <h4>Azra Zahin</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
