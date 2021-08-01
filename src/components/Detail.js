import React from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "../styles/detail.scss";
const Detail = () => {
    let {id} = useParams();
    const property = data.data.features.find(item => item.id === id).properties;
    return (
        <div className="container detail">
            <Header/>
            <table>
                <caption>{property.title}</caption>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>
                            {property.place}
                        </td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{property.mag}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{property.time}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{property.status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{property.tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{property.type}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail;