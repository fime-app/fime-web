import "./EventBox.css";

type EventBoxProps = {
    name: string,
    description: string,
}
//hi
const EventBox = ({ name, description }: EventBoxProps): JSX.Element => {
    return (
        <div className="eventBox">
            <div className="eventTitle">{name}</div>
            <hr className="eventLine"></hr>
            <div className="eventDescription">{description}</div>
        </div>
    )
}

export default EventBox;
