import { DateRange } from "../types";

export function getDateRangeTotalStart(dateRange: DateRange[]): Date | null {
    if (dateRange.length > 0) {
        const dateString = dateRange[0].range?.startDate?.toString();
        let date: Date | null = null;
        if (dateString) {
            date = new Date(dateString)
        }
        return date;
    }
    else return null;
}
export function getDateRangeTotalEnd(dateRange: DateRange[]): Date | null {
    if (dateRange.length > 0) {
        const dateString = dateRange.slice(-1)[0].range?.endDate;
        let date: Date | null = null;
        if (dateString) {
            date = new Date(dateString)
        }
        return date;
    }
    else return null;
}
