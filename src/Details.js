import React from "react";

const Details = (props) => {
    return (
        <div>
            <h1>{props.match.params.schoolName}</h1>
        </div>
    );
};

export default Details;