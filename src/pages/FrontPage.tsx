import React from "react";
import DatePicker from "../common/Components/DatePicker";
import { testAxios } from "../common/utils/axios";

function FrontPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            name: { value: string };
        };
        console.log(target.name.value);
    };

    testAxios().then((result) => console.log(result));

    return (
        <div className="front-page">
            <DatePicker />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
}

export default FrontPage;
