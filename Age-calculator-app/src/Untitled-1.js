function ageCalculator(day, month, year) {
  let cDate = new Date(2024, 1, 29);
  let dayDiff = cDate.getDate() - day;
  let monthDiff = cDate.getMonth() - month;
  let yearDiff = cDate.getFullYear() - year;
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
  console.log(`Age is ${yearDiff}years, ${monthDiff}months, ${dayDiff}days`);
}

ageCalculator(28, 1, 2021);

// //ADESIPE

// console.log(new Date(2024, -1, 2).toLocaleDateString('en-us'))

// let date = {
//     'date':24,
//     'month':9,
//     'year':2006,
// }

// const dateConverter = (date) =>{
//     let timezoneOffset = date.getTimezoneOffset()
//     if(timezoneOffset != 0){
//         date.setHours(0 - (timezoneOffset/60))
//     }
//     date.setMilliseconds(0)
//     date.setSeconds(0)
//     date.setMinutes(0)

//     return date
// }

// const monthChecker = (val) =>{
//     let {date, month, year} = val

//     let today = new Date()
//     let age = new Date(year, month, date)

//     let difference = dateConverter(today) - dateConverter(age)

//     const constant = new Date(1970)
//     let _date = {}
//     let date_difference = new Date(difference)

//     _date.calculatedYear = date_difference.getFullYear() - constant.getFullYear()
//     _date.calculatedMonth = date_difference.getMonth() - constant.getMonth()
//     _date.calculatedDate = date_difference.getDate() - constant.getDate()

//     return [difference, _date]

// }
// console.log(monthChecker(date))
// console.log(new Date(1970))

// //Lawrence

// let date = {
//   userDay: 30,
//   userMonth: 10,
//   userYear: 2006,
// };

// let calculatedDay = 0;
// let calculatedMonth = 0;
// let calculatedYear = 0;

// const monthChecker = (val) => {
//   let today = new Date();
//   let { userDay, userMonth, userYear } = val;
//   let currYear = today.getFullYear();
//   let currMonth = today.getMonth();
//   let currDay = today.getDay();

//   if (userYear > currYear) return "Input A Valid Year";

//   if (userDay > currDay && userMonth > currMonth) {
//     calculatedDay = userDay - currDay;
//     calculatedMonth = userMonth - currMonth;
//     calculatedYear = currYear - userYear;
//     return `${calculatedYear}years, ${calculatedMonth}months, ${calculatedDay} Days`;
//   } else if (userMonth < currMonth) {
//     calculatedYear = currYear - userYear;
//     calculatedMonth = Math.abs(12 - (currMonth - userMonth));
//     ///TODO
//     if (userDay < currDay) {
//       return null;
//       calculatedDay = Math.abs();
//     } else if (userMonth > currMonth) {
//       return null;
//     }
//     ///TODO
//     return `${calculatedYear}years, ${calculatedMonth}months, ${calculatedDay}Days`;
//   }
// };

// console.log(monthChecker(date));
