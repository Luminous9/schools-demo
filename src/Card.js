import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.info.mapUrl} alt=""/>
            <h3>{props.info.name}</h3>
            <p>
                {props.info.level.map((level) => {
                    return ` ${level} `;
                })}
            </p>
        </div>
    );
};

export default Card;