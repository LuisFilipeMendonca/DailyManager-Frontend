import { months } from "../constants/dates";

export const timeWithoutSec = (time) => {
  if (!time) return null;
  if (time.length <= 5) return time;
  return time.slice(0, time.length - 3);
};

// export const dateFormated = (date, isInput) => {
//   const newDate = new Date(date);
//   const day = newDate.getDate();
//   const weekDay = newDate.getDay();
//   let month = newDate.getMonth();
//   const year = newDate.getFullYear();

//   if (isInput) {
//     month++;
//     return `${year}-${month > 9 ? month : "0" + month}-${
//       day > 9 ? day : "0" + day
//     }`;
//   }

//   return `${days[weekDay]}, ${day} ${months[month].value}, ${year}`;
// };

export const isLeapYear = () => {
  const year = new Date().getFullYear();

  return new Date(year, 1, 29).getDate() === 29;
};

export const updatedMonths = () => {
  const updatedMonths = months;
  if (isLeapYear()) {
    updatedMonths[1].days = 29;
  }

  return updatedMonths;
};

export const monthlyChartLabels = () => {
  return months.map((month) => month.value.slice(0, 3));
};

export const dailyChartLabels = () => {
  const date = new Date();
  const month = date.getMonth();
  // const year = date.getFullYear();
  const labels = [];
  const correctMonth = month + 1;

  for (let i = 1; i <= months[month].days; i++) {
    labels.push(
      `${i > 9 ? i : "0" + i}-${
        correctMonth > 9 ? correctMonth : "0" + correctMonth
      }`
    );
  }

  return labels;
};
