/**
 * This function finds and returns the one different number in an array of integers
 * @param {integer array} numbers 
 * @returns unique integer 
 */
function stray(numbers) {
    numbers = numbers.sort((a,b) => a-b)
    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0]
  }