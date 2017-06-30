import React, { Component } from "react";
import Feature from "./Feature.js";
import Carousel from "./Carousel.js";
import burger from "./icons/hamburger.svg";
import diamond from "./icons/diamond.svg";
import puzzle from "./icons/puzzle.svg";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Bacon Ipsum</h1>
                <p className="summary">Cupidatat nostrud ad proident consequat nulla ex proident deserunt voluptate reprehenderit Lorem consectetur cupidatat quis.</p>
                <div className="features">
                    <Feature
                        image={burger}
                        title={"Hamburger"}
                        text={"Laboris non pariatur velit tempor voluptate magna amet veniam qui laborum magna cupidatat. Aliqua et culpa id consequat pariatur voluptate cillum."}
                    />
                    <Feature
                        image={diamond}
                        title={"Diamonds"}
                        text={"Quis aliqua magna laborum et. Lorem eu dolor occaecat ad. Aliquip incididunt consequat nostrud ipsum."}
                    />
                    <Feature
                        image={puzzle}
                        title={"Extreme Puzzling"}
                        text={"Nulla fugiat aliquip occaecat elit sit eiusmod mollit ullamco exercitation. Enim eu sit veniam nisi ut sunt velit aliqua proident aliquip occaecat anim."}
                    />
                </div>
                <div className="schools">
                    <h2>Featured Schools</h2>
                    <Carousel schools={this.props.schools} />
                </div>
            </div>
        );
    }
}