import React from "react";

const Card = (props) => {
    return (
        <div>
            <img src={props.info.mapUrl} alt=""/>
        </div>
    );
};

export default Card;