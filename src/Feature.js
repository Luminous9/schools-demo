import React from "react";
import "./Feature.css";

const Feature = (props) => {
    return (
        <div className="Feature">
            <img src={props.image} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default Feature;