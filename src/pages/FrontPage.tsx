import React from "react";
import DatePicker from "../common/Components/DatePicker";
import { testAxios } from "../common/utils/axios";
import "./FrontPage.css"

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
            {
                id: 3,
                name: "Fucking",
            },
        ],
    };

    var eventBoxVar = `
    <div id="eventBoxId" class="eventBox">
        <div class="eventTitle">Event</div>
        <hr class="eventLine" />
        <div class="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
    </div>`;
    <div className="eventBox">
        <div className="eventTitle">Event 1</div>
        <hr className="eventLine" />
        <div className="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
    </div>

    const gridArray:string[] = [];
    
    const myFunction = () =>{
        gridArray.push(eventBoxVar);
        const eventGrid = document.getElementById('eventGrid');
            if (eventGrid !== null) {
                eventGrid.innerHTML = '';
                for (let i = 0; i < gridArray.length; i++){
                    eventGrid.innerHTML += gridArray[i];
                }
        }
    }
    // const newFunction = () =>{
    //     const car = document.getElementById('eventGrid')
    //     const div = document.createElement("div")
    //     const node = document.createTextNode('hello')
    //     div.appendChild(node)
    //     car?.appendChild(div)
    // }

    return (
        <div className="">
                <div className="create-event-div">
                    <div className="button-alignment-div">
                        <button className="create-event-button" onClick= {myFunction}>
                            + Create Event
                        </button>
                    </div>
                </div>
                <div className="event-largest-container">
                    <div id="eventGrid" className="event-grid-container">
                        <div className="eventBox">
                            <div className="eventTitle">Event 1</div>
                            <hr className="eventLine" />
                            <div className="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
                        </div>
                        <div className="eventBox">
                            <div className="eventTitle">Event 2</div>
                            <hr className="eventLine" />
                            <div className="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
                        </div>
                        <div className="eventBox">
                            <div className="eventTitle">Event 3</div>
                            <hr className="eventLine"></hr>
                            <div className="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
                        </div>
                        <div className="eventBox">
                            <div className="eventTitle">Event 3</div>
                            <hr className="eventLine"></hr>
                            <div className="eventDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore suscipit placeat quis neque officia fugit esse provident molestias facere eveniet.</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FrontPage;
