/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let records = [];
  let res = 0;

  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(operations[i])) {
      records.push(operations[i]);
    }
    if (operations[i] === "C") {
      records.pop();
    }
    if (operations[i] === "D") {
      let item = Number(records[records.length - 1]);
      item *= 2;
      records.push(item);
    }
    if (operations[i] === "+") {
      let item = Number(records[records.length - 1]);
      item += Number(records[records.length - 2]);
      records.push(item);
    }
  }

  for (let num of records) {
    res += Number(num);
  }
  return res;
};

console.log(calPoints(["5", "2", "C", "D", "+"])); // 30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoints(["1", "C"])); // 0