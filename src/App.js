import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            schools: [],
            maps: []
        };
    }
    render() {
        let showMaps = () => {
            let idList = [];
            for (var i = 0; i < this.state.schools.length; i++) {
                idList.push(this.state.schools[i].id);
            }

            return (
                this.state.maps.map((mapUrl) => {
                    return <img src={mapUrl} alt="" key={idList.shift()}/>;
                })
            );
        };
        return (
            <div className="App">
                {showMaps()}
            </div>
        );
    }

    componentDidMount() {
        const endpoint = "http://www.scholarhood.ca/dev-test.json";
        const schoolsData = [];

        fetch(endpoint)
            .then(res => res.json())
            .then((data) => {
                schoolsData.push(...data);
                this.setState({
                    schools: schoolsData
                });

                const apiKey = "AIzaSyAvatI8cHC0nqYUxmHGhCvt3k4GIasen3c";
                const apiUrl = "http://maps.googleapis.com/maps/api/staticmap?";
                const mapsList = [];

                this.state.schools.forEach((school) => {
                    let latitude = school.latitude;
                    let longitude = school.longitude;
                    let coordinates = school.boundaries.secondary[0];
                    let boundaries = "";

                    for (var i = 0; i < coordinates.length; i++) {
                        boundaries += coordinates[i][0] + "," + coordinates[i][1] + "%7C";
                    }
                    boundaries += coordinates[0][0] + "," + coordinates[0][1]; // close the boundary shape by going back to the first point

                    let params = `size=400x400&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&path=color:0x0000ff%7Cweight:4%7Cfillcolor:0xFFFF0022%7C${boundaries}&key=`;
                    let newUrl = apiUrl + params + apiKey;
                    mapsList.push(newUrl);
                    console.log(newUrl.length);
                });

                console.log(mapsList);

                this.setState({
                    maps: mapsList
                });
            });

    }
}

export default App;
