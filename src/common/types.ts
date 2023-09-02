import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export type DateRange = {
    name: string | undefined;
    range: DateValueType;
};

export type Event = {
    name: string;
    description: string;
    dateRanges: DateRange[];
};

export type AxiosEventsResponse = {
    id: number;
    name: string;
    description: string;
    dateRanges: DateRange[];
};
