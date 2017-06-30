import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import Card from "./Card.js";

export default class Carousel extends Component {
    render() {
        return (
            <div>
                {
                    this.props.schools.map((school) => {
                        return (
                            <Link to={`/${school.slug}`} key={school.id}>
                                <Card info={school} />
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}