import { describe, it, expect } from 'vitest'
import { isHarshadNumber } from '../HarshadNumber.js'

describe('isHarshadNumber', () => {
  it('should return true for Harshad numbers', () => {
    expect(isHarshadNumber(18)).toBe(true)
    expect(isHarshadNumber(21)).toBe(true)
    expect(isHarshadNumber(12)).toBe(true)
  })

  it('should return false for non-Harshad numbers', () => {
    expect(isHarshadNumber(19)).toBe(false)
    expect(isHarshadNumber(23)).toBe(false)
  })

  it('should throw RangeError for invalid input', () => {
    expect(() => isHarshadNumber(-5)).toThrow(RangeError)
    expect(() => isHarshadNumber(0)).toThrow(RangeError)
    expect(() => isHarshadNumber(3.14)).toThrow(RangeError)
  })
})
