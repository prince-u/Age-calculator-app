import { useEffect, useState } from "react";
export default function DateDisplay({ date, hasSubmitted }) {
  const [state, setState] = useState({
    dayDiff: "--",
    monthDiff: "--",
    yearDiff: "--",
  });
  useEffect(() => {
    if (!hasSubmitted) {
      return;
    } else {
      let cDate = new Date();
      let dayDiff = cDate.getDate() - date.day;
      let monthDiff = cDate.getMonth() - date.month;
      let yearDiff = cDate.getFullYear() - date.year;
      if (monthDiff < 0) {
        monthDiff += 12;
        yearDiff--;
      }
      if (dayDiff < 0) {
        let prevMonthDays = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          0
        ).getDate();
        dayDiff += prevMonthDays;
        monthDiff--;
      }
      setState({ dayDiff, monthDiff, yearDiff });
      // console.log("useEffect ran", dayDiff, monthDiff, yearDiff);
    }
  }, [date]);
  return (
    <div className="date-display">
      <div className="years">
        <span className="displayed-date">{state.yearDiff}</span>
        {state.yearDiff === 1 ? "year" : "years"}
      </div>
      <div className="months">
        <span className="displayed-date">{state.monthDiff}</span>
        {state.monthDiff === 1 ? "month" : "months"}
      </div>
      <div className="days">
        <span className="displayed-date">{state.dayDiff}</span>
        {state.dayDiff === 1 ? "day" : "days"}
      </div>
    </div>
  );
}
