import React from "react";
import "./Details.css";

const Details = (props) => {
    let name = props.match.params.schoolName;
    name = name.replace(/-/g, " ");
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Details;