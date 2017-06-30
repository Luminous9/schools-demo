import React, { Component } from "react";
import Carousel from "./Carousel.js";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel schools={this.props.schools} />
            </div>
        );
    }
}