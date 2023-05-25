import "./EventBox.css";

type EventBoxProps = {
    name: string,
    description: string,
}

const EventBox = ({ name, description }: EventBoxProps) => {
    return (
        <div className="eventBox">
            <div className="eventTitle">{name}</div>
            <hr className="eventLine"></hr>
            <div className="eventDescription">{description}</div>
        </div>
    )
}

export default EventBox;