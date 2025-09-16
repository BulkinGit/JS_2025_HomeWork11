/*
Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
*/
if (confirm("Почати тестування?")) {
  const getArrNumber = function (minVal, maxVal) {
    return minVal + Math.floor(Math.random() * (maxVal - minVal + 1));
  };
  const getArrDays = function (minVal, maxVal) {
    const arrRow = [];
    for (let i = 0; i < 7; i += 1) {
      const randNum = getArrNumber(minVal, maxVal);
      arrRow.push(randNum);
    }
    return arrRow;
  };

  const getArrShop = function (rowNum, minVal, maxVal) {
    const table = [];
    for (let i = 0; i < rowNum; i += 1) {
      const randRow = getArrDays(minVal, maxVal);
      table.push(randRow);
    }
    return table;
  };

  // 1) загальний прибуток кожного масиву за тиждень;
  const getAllSum = function (arrShop) {
    let arrSumWeek = [];
    for (let i = 0; i < arrShop.length; i += 1) {
      let sum = 0;
      for (const day of arrShop[i]) {
        sum += day;
      }
      arrSumWeek.push(sum);
    }
    return arrSumWeek;
  };
  // загальний прибуток за робочі дні
  const getSumWorkDays = function (arrShop) {
    let sum = 0;
    for (let week = 0; week < arrShop.length; week += 1) {
      for (let day = 0; day < 5; day += 1) {
        sum += arrShop[week][day];
      }
    }
    return sum;
  };
  // загальний прибуток за вихідні дні
  const getSumWeekends = function (arrShop) {
    let sum = 0;
    for (const week of arrShop) {
      for (let day = 5; day <= 6; day += 1) {
        sum += week[day];
      }
    }
    return sum;
  };

  // максимальний прибуток за середу
  const getMaxValue = function (arrShop) {
    let maxNum = -Infinity;
    for (const week of arrShop) {
      if (week[2] > maxNum) {
        maxNum = week[2];
      }
    }
    return maxNum;
  };

  // сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
  const getFilterValue = function (arrShop) {
    const value = [];
    for (const week of arrShop) {
      for (let num = 0; num < week.length; num += 1) {
        if (week[num] > 200) {
          value.push(week[num]);
        }
      }
    }
    return value;
  };

  const shops = getArrShop(5, 200, 1000);
  console.log(shops);

  const allSumWeeks = getAllSum(shops);
  const allSumWorkDays = getSumWorkDays(shops);
  const allSumWeekends = getSumWeekends(shops);
  const maxValue = getMaxValue(shops);
  const filterValue = getFilterValue(shops);
  document.write(`загальний прибуток кожного масиву за тиждень - ${allSumWeeks}<br>`);
  document.write(`загальний прибуток за робочі дні - ${allSumWorkDays}<br>`);
  document.write(`загальний прибуток за вихідні дні - ${allSumWeekends}<br>`);
  document.write(`максимальний прибуток за середу - ${maxValue}<br>`);
  document.write(`сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200 - ${filterValue}<br>`);
  // console.log(getFilterValue(shops));
}

