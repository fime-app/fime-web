import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

function DatePicker() {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1 className="text-3xl">Hello World!</h1>
      <Datepicker value={value} onChange={handleValueChange} />
    </div>
  );
}

export default DatePicker;
