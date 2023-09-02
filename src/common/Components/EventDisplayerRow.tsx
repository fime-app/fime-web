import { format } from "date-fns";
import { Event } from "../types";
import { getDateRangeTotalStart } from "../utils/DateRangeUtils";
import { formatDateCustom } from "../utils/FormatDate";

type EventDisplayerRowProps = {
    event: Event;
};

function EventDisplayerRow({ event }: EventDisplayerRowProps) {
    return (
        <div className="col">
            <div className="row">
                <div className="col-6 text-left">
                    <strong>{event.name}</strong>
                </div>
                <div className="col-6">
                    {formatDateCustom(getDateRangeTotalStart(event.dateRanges))}
                    {formatDateCustom(getDateRangeTotalEnd(event.dateRanges))}
                </div>
            </div>
            <div>
                <p>{event.description}</p>
            </div>
        </div>
    );
}

export default EventDisplayerRow;
