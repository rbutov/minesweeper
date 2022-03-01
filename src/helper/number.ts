/**
 * _convert number to array of 3 items
 * @param num: _input number
 */
const numberToArray = (num: number) => {
  const resArray = Array.from(String(num), Number);
  if (resArray.length < 3) {
    for (let i = 0; i < 4 - resArray.length; i++) {
      resArray.unshift(0);
    }
  }

  return resArray.map((n) => (isNaN(n) ? 10 : n));
};

export { numberToArray };
