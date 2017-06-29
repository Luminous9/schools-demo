import React, { Component } from "react";
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
            <div className="App">

            </div>
        );
    }

    componentDidMount() {
        const endpoint = "http://www.scholarhood.ca/dev-test.json";
        const schoolsData = [];

        fetch(endpoint)
            .then(res => res.json())
            .then(data => schoolsData.push(...data));

        this.setState({
            schools: schoolsData
        });
    }
}

export default App;
