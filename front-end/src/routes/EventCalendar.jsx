import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventCalender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(newDate) => setDate(newDate)}
      dateFormat="yyyy-MM-dd"
    />
  );
};

export default EventCalender;
