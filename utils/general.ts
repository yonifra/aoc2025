/**
 * General utility functions for Advent of Code solutions
 */

/**
 * Sum an array of numbers
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

/**
 * Product of an array of numbers
 */
export function product(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc * n, 1)
}

/**
 * Find the minimum value in an array
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers)
}

/**
 * Find the maximum value in an array
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers)
}

/**
 * Count occurrences of items in an array
 */
export function countOccurrences<T>(arr: T[]): Map<T, number> {
  const counts = new Map<T, number>()
  for (const item of arr) {
    counts.set(item, (counts.get(item) || 0) + 1)
  }
  return counts
}

/**
 * Generate a range of numbers [start, end)
 */
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = []
  for (let i = start; i < end; i += step) {
    result.push(i)
  }
  return result
}

/**
 * Get all unique elements from an array
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

/**
 * Chunk an array into smaller arrays of specified size
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

/**
 * Transpose a 2D array (swap rows and columns)
 */
export function transpose<T>(matrix: T[][]): T[][] {
  if (matrix.length === 0) return []
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]))
}

/**
 * Rotate a 2D grid 90 degrees clockwise
 */
export function rotateClockwise<T>(grid: T[][]): T[][] {
  return transpose(grid).map((row) => row.reverse())
}

/**
 * Rotate a 2D grid 90 degrees counter-clockwise
 */
export function rotateCounterClockwise<T>(grid: T[][]): T[][] {
  return transpose(grid.map((row) => row.slice().reverse()))
}

/**
 * Manhattan distance between two points
 */
export function manhattanDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

/**
 * Euclidean distance between two points
 */
export function euclideanDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

/**
 * Greatest Common Divisor
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

/**
 * Least Common Multiple
 */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b)
}

/**
 * Deep clone an object or array
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Check if two arrays are equal
 */
export function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false
  return arr1.every((val, index) => val === arr2[index])
}

/**
 * Get all permutations of an array
 */
export function permutations<T>(arr: T[]): T[][] {
  if (arr.length <= 1) return [arr]

  const result: T[][] = []
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
    const perms = permutations(rest)
    for (const perm of perms) {
      result.push([arr[i], ...perm])
    }
  }
  return result
}

/**
 * Get all combinations of size k from an array
 */
export function combinations<T>(arr: T[], k: number): T[][] {
  if (k === 0) return [[]]
  if (arr.length === 0) return []

  const [first, ...rest] = arr
  const withFirst = combinations(rest, k - 1).map((combo) => [first, ...combo])
  const withoutFirst = combinations(rest, k)

  return [...withFirst, ...withoutFirst]
}

/**
 * Memoize a function
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)!
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}
