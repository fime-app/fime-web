import { DateRange } from "../types";

export function getDateRangeTotalStart(dateRange: DateRange[]): Date | null {
    if (dateRange.length > 0) return dateRange[0].range?.startDate;
    else return null;
}
export function getDateRangeTotalEnd(dateRange: DateRange[]): Date | null {
    if (dateRange.length > 0) return dateRange.slice(-1)[0].range?.endDate;
    else return null;
}
