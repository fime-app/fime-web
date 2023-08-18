import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import DateRangesDisplay from "../common/Components/DateRangesDisplay";
import { DateRange } from "../common/types";

function CreateEventPage() {
    // back button
    // form to create thing, sends back to main page
    // just send predefined data back first
    // console log the form info

    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    // Clear this default setting later (set to [])
    const [dateRanges, setDateRanges] = useState<DateRange[]>([
        {
            name: "Name 1",
            range: {
                startDate: new Date("December 17, 1995 03:24:00"),
                endDate: new Date("December 19, 1995 03:24:00"),
            },
        },
        {
            name: "Name 2",
            range: {
                startDate: new Date("December 21, 1995 03:24:00"),
                endDate: new Date("December 23, 1995 03:24:00"),
            },
        },
    ]);

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    // IMP: merge date ranges here
    const addDateRange = (range: DateRange) => {
        setDateRanges([...dateRanges, range]);
    };

    return (
        // <div className="h-screen flex items-center justify-center">
        <div>
            <div className="grid grid-cols-2 gap-4 h-screen">
                <div id="left-side" className="m-10 w-1/2">
                    <form>
                        <label htmlFor="event-name">Event Name: </label>
                        <input
                            id="event-name"
                            placeholder="Hiking"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </form>
                    {!showDatePicker && (
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 items-center"
                            onClick={() => setShowDatePicker(true)}
                        >
                            Add Dates
                        </button>
                    )}
                    <div className="mt-5">
                        <DateRangesDisplay dateRanges={dateRanges} />
                    </div>
                </div>
                <div id="right-side" className="flex-1 m-10">
                    <div className="flex-1 align-middle h-100">
                        {
                            // TODO: Component this
                            showDatePicker && (
                                <>
                                    <input
                                        id="event-name"
                                        placeholder="Optional Name"
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
                                    />
                                    <Datepicker
                                        value={value}
                                        onChange={handleValueChange}
                                    />
                                    <button
                                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 items-center"
                                        onClick={() => {
                                            addDateRange({
                                                name: "",
                                                range: value,
                                            });
                                            setShowDatePicker(false);
                                        }}
                                    >
                                        Add
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="fixed bottom-10 w-full grid place-items-center">
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 items-center">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CreateEventPage;
