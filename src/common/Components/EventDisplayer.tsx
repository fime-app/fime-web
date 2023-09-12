import { useEffect, useState } from "react";
import { AxiosEventsResponse, DateRange, Event } from "../types";
import axios, { AxiosResponse } from "axios";
import { axiosGetRequest } from "../utils/axios";
import EventDisplayerRow from "./EventDisplayerRow";

//TODO: Make this scrollable
function EventDisplayer() {
    //useEffect make a call
    //button to refresh and call again
    //store in a state variable here
    const [events, setEvents] = useState<Event[]>([]);

    async function getEvents(): Promise<void> {
        axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
        const response = await axios.get("/all-events");
        const data = response.data.map((event: AxiosEventsResponse) => {
            return {
                name: event.name,
                description: event.description,
                dateRanges: event.dateRanges,
            };
        });
        setEvents(data);
        console.log(events);
    }

    useEffect(() => {
        getEvents();
    });

    return (
        <div>
            <div>Date Ranges</div>
            {events.map((event, index) => {
                return (
                    <>
                        <div id={"event" + index}>
                            <EventDisplayerRow event={event} />
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default EventDisplayer;
