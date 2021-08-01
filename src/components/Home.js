import React, {useState} from "react";
import Header from "./Header";
import EarthquakesTable from "./EarthquakesTable";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <EarthquakesTable/>
            </div>
        </div>
    )
}

export default Home;