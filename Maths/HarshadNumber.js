/**
 * @file
 * @brief Check if a given number is a Harshad (Niven) number.
 * @details
 * A Harshad number (or Niven number) is an integer that is divisible
 * by the sum of its digits.
 *
 * Examples:
 * - 18 is a Harshad number because 1 + 8 = 9 and 18 % 9 === 0
 * - 19 is not a Harshad number because 1 + 9 = 10 and 19 % 10 !== 0
 *
 * @see [Harshad number - Wikipedia](https://en.wikipedia.org/wiki/Harshad_number)
 */

/**
 * Determines whether a number is a Harshad number.
 *
 * @param {number} n - The positive integer to check.
 * @returns {boolean} `true` if the number is a Harshad number, otherwise `false`.
 * @throws {RangeError} If `n` is not a positive integer.
 *
 * @example
 * isHarshadNumber(18) // true
 * isHarshadNumber(19) // false
 */
export function isHarshadNumber(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new RangeError('Input must be a positive integer.')
  }

  const sumOfDigits = n
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0)

  return n % sumOfDigits === 0
}
