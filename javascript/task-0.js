/*
1)	номери рядків від 0 до половини, стовпці від 0 до половини
*/

if (confirm("Почати тестування?")) {
  const getArrNumber = function (minVal, maxVal) {
    return minVal + Math.floor(Math.random() * (maxVal - minVal + 1));
  };
  const getArrColum = function (arrLength, minVal, maxVal) {
    const arrRow = [];
    for (let i = 0; i < arrLength; i += 1) {
      const randNum = getArrNumber(minVal, maxVal);
      arrRow.push(randNum);
    }
    return arrRow;
  };

  const getArrRow = function (rowNum, colNum, minVal, maxVal) {
    const table = [];
    for (let i = 0; i < rowNum; i += 1) {
      const randRow = getArrColum(colNum, minVal, maxVal);
      table.push(randRow);
    }
    return table;
  };

  /*
  // запит на введення чисел через від користувача
  const getUserValue = function () {
    const rowNum = parseInt(prompt(`введіть кількість рядків`));
    const colNum = parseInt(prompt(`введіть кількість стовбців`));
    const minVal = parseInt(prompt(`введіть мінімальне`));
    const maxVal = parseInt(prompt(`введіть максимальне`));
    return getArrRow(rowNum, colNum, minVal, maxVal);
  };
*/
  // вивід заданих чисел
  const arrTable = getArrRow(6, 6, 10, 30);
  console.log(arrTable);

  //  1) номери рядків від 0 до половини, стовпці від 0 до половини <br>
  const getTopLeftSum = function (table) {
    let sum = 0;
    for (let row = 0; row < table.length / 2; row += 1) {
      for (let col = 0; col < table[row].length / 2; col += 1) {
        sum += table[row][col];
      }
    }
    return sum;
  };

  // 2)	номери рядків від 0 до половини, стовпці від половини до кінця
  const getTopRightSum = function (table) {
    let sum = 0;
    for (let row = 0; row < table.length / 2; row += 1) {
      for (let col = 3; col < table[row].length; col += 1) {
        sum += table[row][col];
      }
    }
    return sum;
  };

  // 3)номери рядків (від половини до кінця, стовпці від 0 до половини
  const getBottomLeftSum = function (table) {
    let sum = 0;
    for (let row = 3; row < table.length; row += 1) {
      for (let col = 0; col < table[row].length / 2; col += 1) {
        sum += table[row][col];
      }
    }
    return sum;
  };

  // 4) номери рядків від половини до кінця , стовпці від половини до кінця
  const getBottomRightSum = function (table) {
    sum = 0;
    for (let row = 3; row < table.length; row += 1) {
      for (let col = 3; col < table[row].length; col += 1) {
        sum += table[row][col];
      }
    }
    return sum;
  };

  // 5) Суму парних рядків
  const getEvenRowsSum = function (table) {
    sum = 0;
    for (let row = 1; row < table.length; row += 2) {
      for (let col = 0; col < table[row].length; col += 1) {
        sum += arrTable[row][col];
      }
    }
    return sum;
  };

  // 6) Суму непарних стовпців
  const getAddColSum = function (table) {
    sum = 0;
    for (const row of table) {
      for (let col = 0; col < row.length; col += 2) {
        sum += row[col];
      }
    }
    return sum;
  };

  // У парних рядках – непарні стовпці, у непарних – парні.
  const getEvenAddSum = function (table) {
    sum = 0;
    for (let row = 1; row < table.length; row += 2) {
      for (let col = 0; col < table[row].length; col += 2) {
        sum += arrTable[row][col];
      }
    }
    return sum;
  };

  const topLeftSum = getTopLeftSum(arrTable);
  const topRightSum = getTopRightSum(arrTable);
  const bottomLeftSum = getBottomLeftSum(arrTable);
  const bottomRightSum = getBottomRightSum(arrTable);
  const evenRowsSum = getEvenRowsSum(arrTable);
  const addColSum = getAddColSum(arrTable);
  const evenAddSum = getEvenAddSum(arrTable);

  document.write(`сума номери рядків від 0 до половини, стовпці від 0 до половини ${topLeftSum}<br>`);
  document.write(`сума номери рядків від 0 до половини, стовпці від половини до кінця ${topRightSum}<br>`);
  document.write(`сума номери рядків (від половини до кінця, стовпці від 0 до половини ${bottomLeftSum}<br>`);
  document.write(`сума номери рядків від 0 до половини, стовпці від половини до кінця ${bottomRightSum}<br>`);
  document.write(`Суму парних рядків ${evenRowsSum}<br>`);
  document.write(`Суму непарних стовпців ${addColSum}<br>`);
  document.write(`Суму у парних рядках – непарні стовпці, у непарних – парні ${evenAddSum}<br>`);
}
