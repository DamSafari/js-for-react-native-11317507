/**Task 1 */
function processArray(numbers) {
    const result = [];
    for (let x of numbers) {
      if (x % 2 === 0) {
        result.push(x ** 2);
      } else {
        result.push(x * 3);
      }
    }
    return result;
  }

  /**Task 2 */
  function formatArrayStrings(strings, numbers) {
    return strings.map((str, i) => {
      if (numbers[i] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  export { processArray, formatArrayStrings };
