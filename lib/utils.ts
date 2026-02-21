import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};


function f(monthData: any) {

  const data = [
    {
      month: 'January',
      count: 0,
      revenue: 0,
    },
    {
      month: 'February',
      count: 0,
      revenue: 0,
    },
    {
      month: 'March',
      count: 0,
      revenue: 0,
    },
    {
      month: 'April',
      count: 0,
      revenue: 0,
    },
    {
      month: 'May',
      count: 0,
      revenue: 0,
    },
    {
      month: 'June',
      count: 0,
      revenue: 0,
    },
    {
      month: 'July',
      count: 0,
      revenue: 0,
    },
    {
      month: 'August',
      count: 0,
      revenue: 0,
    },
    {
      month: 'September',
      count: 0,
      revenue: 0,
    },
    {
      month: 'October',
      count: 0,
      revenue: 0,
    },
    {
      month: 'November',
      count: 0,
      revenue: 0,
    },
    {
      month: 'December',
      count: 0,
      revenue: 0,
    }
  ];

  const { revPerMonth, ordPerMonth } = { ...monthData };
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let count = 0;
  let revMonth = "";
  let ordMonth = "";
  let revMonthStart: boolean;
  let ordMonthStart: boolean;

  while (count < months.length) {

    let rMonth = "";
    let oMonth = "";

    if (count < revPerMonth.length) {
      revMonth = revPerMonth[count].month;
      revMonthStart = revMonth.startsWith("0");

      if (revMonthStart) {
        rMonth = revMonth.split("-")[0].slice(-1);
      } else {
        rMonth = revMonth.split("-")[0];
      };

      switch (rMonth) {
        case "1":
          data[0].revenue = revPerMonth[count].revenue;
          break;
        case "2":
          data[1].revenue = revPerMonth[count].revenue;
          break;
        case "3":
          data[2].revenue = revPerMonth[count].revenue;
          break;
        case "4":
          data[3].revenue = revPerMonth[count].revenue;
          break;
        case "5":
          data[4].revenue = revPerMonth[count].revenue;
          break;
        case "6":
          data[5].revenue = revPerMonth[count].revenue;
          break;
        case "7":
          data[6].revenue = revPerMonth[count].revenue;
          break;
        case "8":
          data[7].revenue = revPerMonth[count].revenue;
          break;
        case "9":
          data[8].revenue = revPerMonth[count].revenue;
          break;
        case "10":
          data[9].revenue = revPerMonth[count].revenue;
          break;
        case "11":
          data[10].revenue = revPerMonth[count].revenue;
          break;
        case "12":
          data[11].revenue = revPerMonth[count].revenue;
          break;

        default:
          break;
      }
    };

    if (count < ordPerMonth.length) {
      ordMonth = ordPerMonth[count].month;
      ordMonthStart = ordMonth.startsWith("0");

      if (ordMonthStart) {
        oMonth = revMonth.split("-")[0].slice(-1);
      } else {
        oMonth = revMonth.split("-")[0];
      };

      switch (oMonth) {
        case "1":
          data[0].count = ordPerMonth[count].count;
          break;
        case "2":
          data[1].count = ordPerMonth[count].count;
          break;
        case "3":
          data[2].count = ordPerMonth[count].count;
          break;
        case "4":
          data[3].count = ordPerMonth[count].count;
          break;
        case "5":
          data[4].count = ordPerMonth[count].count;
          break;
        case "6":
          data[5].count = ordPerMonth[count].count;
          break;
        case "7":
          data[6].count = ordPerMonth[count].count;
          break;
        case "8":
          data[7].count = ordPerMonth[count].count;
          break;
        case "9":
          data[8].count = ordPerMonth[count].count;
          break;
        case "10":
          data[9].count = ordPerMonth[count].count;
          break;
        case "11":
          data[10].count = ordPerMonth[count].count;
          break;
        case "12":
          data[11].count = ordPerMonth[count].count;
          break;

        default:
          break;
      }
    };

    count++;
  };

  return data;

}
