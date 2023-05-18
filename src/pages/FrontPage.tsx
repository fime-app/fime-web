import React from "react";
import DatePicker from "../common/Components/DatePicker";
import { testAxios } from "../common/utils/axios";

function FrontPage() {
    testAxios().then((result) => console.log(result));

    const testData = {
        vals: [
            {
                id: 1,
                name: "Gym Sesh",
            },
            {
                id: 2,
                name: "Hiking",
            },
        ],
    };

    return (
        <div className="front-page">
            <table className="table-fixed border">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {testData.vals.map((data, index) => {
                    return (
                        <tr
                            key={index}
                            className="text-left"
                            onClick={() => console.log(index)}
                        >
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default FrontPage;
