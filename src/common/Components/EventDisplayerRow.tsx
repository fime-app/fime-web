import { Event } from "../types";
import {
    getDateRangeTotalStart,
    getDateRangeTotalEnd,
} from "../utils/DateRangeUtils";
import { formatDateCustom } from "../utils/FormatDate";

type EventDisplayerRowProps = {
    event: Event;
};

function EventDisplayerRow({ event }: EventDisplayerRowProps) {
    const dateStart = getDateRangeTotalStart(event.dateRanges);
    const dateEnd = getDateRangeTotalEnd(event.dateRanges);

    return (
        <div className="col">
            <div className="row">
                <div className="col-6 text-left">
                    <strong>{event.name}</strong>
                </div>
                {dateStart && dateEnd && (
                    <div className="col-6">
                        {formatDateCustom(dateStart)} -
                        {formatDateCustom(dateEnd)}
                    </div>
                )}
            </div>
            <div>
                <p>{event.description}</p>
            </div>
        </div>
    );
}

export default EventDisplayerRow;
