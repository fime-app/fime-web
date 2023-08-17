import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export type DateRange = {
    name: string | undefined;
    range: DateValueType;
};

export type Event = {
    id: string;
    name: string;
    dateRanges: DateRange[];
};
