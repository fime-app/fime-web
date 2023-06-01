import React from "react";

type Event = {
    id: string;
    name: string;
};

function CreateEventPage() {
    // back button
    // form to create thing, sends back to main page

    // const data: Event[] = [
    //     { id: "123ASD", name: "Hiking" },
    //     { id: "456JKL", name: "Brekky" },
    // ];

    return (
        <div className="h-screen flex items-center justify-center">
            <form>
                <label htmlFor="event-name">Event Name: </label>
                <br />
                <input
                    id="event-name"
                    placeholder="Hiking"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
                <br />
                <input id="submit" type="submit"></input>
            </form>
        </div>
    );
}

export default CreateEventPage;
