import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import Card from "./Card.js";
import "./Carousel.css";

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            itemWidth: 0,
            itemsOffset: 0,
            visibleItems: null
        };
        this.getItemWidth = this.getItemWidth.bind(this);
        this.nextItem = this.nextItem.bind(this);
        this.previousItem = this.previousItem.bind(this);
    }

    getVisibleItems() {
        let itemWidth = document.querySelector(".Carousel-container a").clientWidth;
        let containerWidth = document.querySelector(".Carousel-container").clientWidth;
        let visible= Math.floor(containerWidth / itemWidth);
        this.setState({
            visibleItems: visible
        });
    }

    outerWidth(element) {
        var width = element.offsetWidth;
        var style = getComputedStyle(element);

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }

    getItemWidth() {
        let item = document.querySelector(".Carousel-container a");
        if (item && this.state.itemWidth !== this.outerWidth(item)) {
            this.setState({
                itemWidth: this.outerWidth(item)
            });
        }
    }

    nextItem() {
        if (Math.abs(this.state.itemsOffset) < this.props.schools.length - this.state.visibleItems) {
            this.setState({
                itemsOffset: this.state.itemsOffset - 1
            });
        }
    }

    previousItem() {
        if (this.state.itemsOffset < 0) {
            this.setState({
                itemsOffset: this.state.itemsOffset + 1
            });
        }
    }

    render() {
        const itemsStyle = {
            left: this.state.itemsOffset * this.state.itemWidth + "px"
        };

        return (
            <div className="Carousel">
                <button onClick={this.previousItem}>Previous</button>
                <div className="Carousel-container">
                    {
                        this.props.schools.map((school) => {
                            return (
                                <Link to={`/${school.slug}`} key={school.id} style={itemsStyle}>
                                    <Card info={school} />
                                </Link>
                            );
                        })
                    }
                </div>
                <button onClick={this.nextItem}>Next</button>
            </div>
        );
    }

    componentDidMount() {
        window.onresize = () => {
            this.getItemWidth();
            this.getVisibleItems();
        };
    }

    componentDidUpdate() {
        this.getItemWidth();
        if (this.state.visibleItems === null) {
            this.getVisibleItems();
        }
    }
}