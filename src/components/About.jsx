import React from "react";
import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
      <div className="aboutContainer">
        <div className="aboutCard">
        <Link to="/">
        <div id="closeIcon" className="row">
        <button className="xbutton">X</button>
        </div>
        </Link>
          <h2>Acerca de mi</h2>
          <p ><strong>Hola! Me llamo Maximiliano Horta</strong>. Soy full Stack developer y me oriento al Fron-End <strong>Esta es mi aplicacion del clima!</strong> según sea de día o de noche, el fondo cambia. Este es un proyecto que desarrollé en Soy Henry, un bootcamp intensivo de programación</p>
        </div>
      </div>
    );
  };