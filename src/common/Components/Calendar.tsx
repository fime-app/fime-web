import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
library.add(fas, faAnglesLeft);

type CalendarProps = {
    vals: Dispatch<SetStateAction<Date | undefined>>[];
};

function Calendar({ vals }: CalendarProps) {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Datepicker value={value} onChange={handleValueChange} />
            <FontAwesomeIcon icon={["fas", "angles-left"]} size="xl" />
        </div>
    );
}

export default Calendar;
