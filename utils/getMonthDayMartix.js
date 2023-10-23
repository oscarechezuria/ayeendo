import dayjs from "dayjs";

function getMonthDayMartix(selectedDate = new Date()) {
  let cc = new Date(selectedDate);
  cc.setDate(1);

  const firstDayOfTheMonth = cc.getDay();

  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      let ccDate = new Date(selectedDate);
      ccDate.setDate(currentMonthCount);
      return dayjs(ccDate);
    });
  });

  return daysMatrix;
}

export default getMonthDayMartix;
