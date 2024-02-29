import {Sum} from '../../src/app/components/Sum';
import { expect, describe, test } from 'vitest'

describe('Sum function', () => {
    test('adds two positive numbers correctly', () => {
      const result = Sum('2', '3');
      expect(result).toBe(5); // 2 + 3 = 5
    });
  
    test('adds a positive number and a negative number correctly', () => {
      const result = Sum('5', '-3');
      expect(result).toBe(2); // 5 + (-3) = 2
    });
  
    test('adds two negative numbers correctly', () => {
      const result = Sum('-7', '-5');
      expect(result).toBe(-12); // (-7) + (-5) = -12
    });
  
    test('adds a positive number and zero correctly', () => {
      const result = Sum('8', '0');
      expect(result).toBe(8); // 8 + 0 = 8
    });

    test('adds a negative number and zero correctly', () => {
        const result = Sum('-8', '0');
        expect(result).toBe(-8); // 8 + 0 = 8
      });
  
    test('adds two decimal numbers correctly', () => {
      const result = Sum('1.5', '2.5');
      expect(result).toBe(4); // 1.5 + 2.5 = 4
    });
  
    test('handles invalid inputs gracefully', () => {
      // When input is invalid, it should return NaN
      const result = Sum('abc', 'def');
      expect(result).toBeNaN();
    });
  });

