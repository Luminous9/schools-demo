import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.info.mapUrl} alt=""/>
        </div>
    );
};

export default Card;