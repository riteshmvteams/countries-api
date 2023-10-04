export function formatNumber(value) {
  let number = value.toString();
  let arrNum = number.split("").reverse();
  const loopRun = Math.ceil(number.length / 3);

  for (let i = 1; i <= loopRun; i++) {
    if (i < 2) {
      arrNum.splice(i * 3, 0, ",");
    } else {
      arrNum.splice(i * 3 + i - 1, 0, ",");
    }
  }

  arrNum = arrNum.reverse();

  if (arrNum[0] === ",") {
    arrNum.shift();
  }

  return arrNum.join("");
}
