import React from "react";
import DatePicker from "../common/Components/DatePicker";
import EventBox from "../common/Components/EventBox/EventBox";
import { testAxios } from "../common/utils/axios";
import "./FrontPage.css"

function FrontPage() {
    testAxios().then((result) => console.log(result));

    const eventData = {
        vals: [
            {
                id: 1,
                name: "Gym Sesh",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet."
            },
            {
                id: 2,
                name: "Hiking",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet."
            },
            {
                id: 3,
                name: "Fucking",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet."
            },
        ],
    };

    var eventBoxVar = `
    <div id="eventBoxId" class="eventBox">
        <div class="eventTitle">Event</div>
        <hr class="eventLine" />
        <div class="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
    </div>`;

    const gridArray: string[] = [];

    const myFunction = () => {
        gridArray.push(eventBoxVar);
        const eventGrid = document.getElementById('eventGrid');
        if (eventGrid !== null) {
            eventGrid.innerHTML = '';
            for (let i = 0; i < gridArray.length; i++) {
                eventGrid.innerHTML += gridArray[i];
            }
        }
    }

    return (
        <div className="">
            <div className="create-event-div">
                <div className="button-alignment-div">
                    <button className="create-event-button" onClick={myFunction}>
                        + Create Event LOL
                        </button>
                </div>
            </div>
            <div className="event-largest-container">
                <div id="eventGrid" className="event-grid-container">
                    {
                        eventData.vals.map((object) => {
                            return (
                                <EventBox name={object.name} description={object.description} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
