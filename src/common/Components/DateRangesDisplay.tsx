import { DateRange } from "../types";

type DateRangesDisplayProps = {
    dateRanges: DateRange[] | undefined;
};

function DateRangesDisplay({ dateRanges }: DateRangesDisplayProps) {
    return (
        <div>
            <strong>Date Ranges</strong>
            {dateRanges?.map((range, index) => (
                <div className="mt-5">
                    <strong>{range.name}</strong>
                    <div className="grid grid-cols-2 gap-2">
                        <div>{range?.range?.startDate?.toString()}</div>
                        <div>{range?.range?.endDate?.toString()}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DateRangesDisplay;
