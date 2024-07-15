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
        //So basically what I'm doing here is... if the current month is july and the month of birth is december, then,
        //monthDiff = 7 - 12 = -5, so what we can do here is basically the same as what we do in the second if statement, we can find the distance from december to the end of the year, then find the distance from the start of the year to July
        // so therefore, we have 7 + (12 - 12) = 7
      }
      if (dayDiff < 0 && monthDiff > 0) {
        let birthMonthDays = new Date(date.year, date.month + 1, 0).getDate();
        dayDiff += birthMonthDays;
        monthDiff--;
        //so basically what I'm doing here is... If your current date is 12th of july and your date of birth is 25th of january for example,
        /// then dayDiff = 12 - 25 = -13days, so we then add the total number days in that month(january) to get the number of days from january 25 to the end of january and add it to the number of days from the beginning of July to July 12th
        //so therefore dayDiff = 12 + (31 - 25) = 18 days
      }
      if (dayDiff < 0 && monthDiff === 0) {
        //same month, past year, future day
        let birthMonthDays = new Date(date.year, date.month + 1, 0).getDate();
        dayDiff += birthMonthDays;
        monthDiff = 11;
        yearDiff--;
      }
      setState({ dayDiff, monthDiff, yearDiff });
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
