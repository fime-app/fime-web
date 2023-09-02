import EventDisplayer from "../common/Components/EventDisplayer";

function MyEventsPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-lg mt-5 mb-4">My Events</div>
            <EventDisplayer />
        </div>
    );
}

export default MyEventsPage;
