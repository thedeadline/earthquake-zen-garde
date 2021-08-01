import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "../styles/earthquakesTable.scss";
import { formatDate } from "../utils/formatDate";
import { sortData } from "../utils/sortData";

const EarthquakesTable = () => {
    const { sortedList, sortBy } = sortData(data.data.features);
    const tableRows = () =>  {  
        return (
            sortedList.map((element)=>
                <tr key={element.id}>
                    <td>
                        <Link to={`/detail/${element.id}`}>
                            <p>{element.properties.place}</p>
                        </Link>
                    </td>
                    <td>
                        <p>{element.properties.mag}</p>
                    </td>
                    <td>
                        <p>{formatDate(element.properties.time)}</p>
                    </td>
                </tr>
            )
         )
    }
    return (
        <>
            <table className="earthquakes-table">
                <caption>{data.data.metadata.title}</caption>
                <thead id="earthquakes-header">
                    <tr>
                        <th>
                            <button type="button" onClick={() => sortBy("place")}>
                                Title
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={() => sortBy("mag")}>
                                Magnitude
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={() => sortBy("time")}>
                                Time
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows()}
                </tbody>
            </table>
        </>
    )
}

export default EarthquakesTable;