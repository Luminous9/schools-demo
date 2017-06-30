import React, { Component } from "react";
import {
    BrowserRouter as Router,
    NavLink as Link,
    Route,
    Switch
} from "react-router-dom";
import Home from "./Home";
import Details from "./Details.js";
import Polyline from "polyline";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            schools: []
        };
    }
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <Home schools={this.state.schools} />}/>
                        <Route path="/:schoolName" component={Details} />
                    </Switch>
                </div>
            </Router>
        );
    }

    componentDidMount() {
        const endpoint = "http://www.scholarhood.ca/dev-test.json";
        const schoolsData = [];

        fetch(endpoint)
            .then(res => res.json())
            .then((data) => {
                schoolsData.push(...data);

                // Create the google static maps URLs
                const apiKey = "AIzaSyAvatI8cHC0nqYUxmHGhCvt3k4GIasen3c";
                const apiUrl = "http://maps.googleapis.com/maps/api/staticmap?";

                schoolsData.forEach((school) => {
                    const latitude = school.latitude;
                    const longitude = school.longitude;
                    let pathList = "";

                    school.boundaries.secondary.forEach((region) => { // Some schools have unconnected regions for the boundaries, so we create a path for each one
                        const coordinates = region;
                        const boundaries = [];

                        for (var i = 0; i < coordinates.length; i++) {
                            const point = [coordinates[i][0], coordinates[i][1]];
                            boundaries.push(point);
                        }
                        boundaries.push([coordinates[0][0], coordinates[0][1]]); // close off the shape by adding the first point again
                        const newPolyline = Polyline.encode(boundaries); // encode the array of points into a polyline

                        pathList += `&path=color:0x0000ff%7Cweight:4%7Cfillcolor:0xFFFF0022%7Cenc:${newPolyline}`;
                    });

                    const params = `size=400x400&markers=color:blue%7Clabel:S%7C${latitude},${longitude}${pathList}&key=`;
                    const newUrl = apiUrl + params + apiKey;
                    school.mapUrl = newUrl;
                });

                this.setState({
                    schools: schoolsData
                });
            });
    }
}

export default App;
