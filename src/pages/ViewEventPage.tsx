import EventDisplayer from "../common/Components/EventDisplayer";

function ViewEventPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mt-5 font-bold text-lg">Event Name</div>
            <EventDisplayer />
        </div>
    );
}

export default ViewEventPage;
