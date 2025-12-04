import { readInputFromDir } from '../utils/fileUtils'

const input = readInputFromDir(import.meta.url, 'input.txt')

function createMatrix(input: string): string[][] {
  const matrix: string[][] = []
  const lines = input.trim().split('\n')

  lines.forEach((line) => {
    matrix.push(line.split(''))
  })

  return matrix
}

function countRolls(
  matrix: string[][],
  y: number,
  x: number,
  height: number,
  width: number,
  total: boolean = false
): number {
  // count all 8 adjacent cells that contain the character "@"
  let rolls = 0

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue // skip the center cell

      const newY = y + i
      const newX = x + j

      // check bounds
      if (newY >= 0 && newY < height && newX >= 0 && newX < width) {
        if (matrix[newY][newX] === '@') {
          rolls++

          if (total) {
            matrix[newY][newX] = '.'
          }
        }
      }
    }
  }

  return rolls
}

export function part1(input: string): number {
  const matrix = createMatrix(input)
  let accessibleRolls = 0

  for (let i = 0; i < matrix.length; i++) {
    // i is the horizontal line
    for (let j = 0; j < matrix[i].length; j++) {
      // j is the specific cell

      if (matrix[i][j] === '@') {
        const rolls = countRolls(matrix, i, j, matrix.length, matrix[i].length)
        if (rolls < 4) {
          accessibleRolls++
        }
      }
    }
  }

  return accessibleRolls
}

console.log('Day 04 - Part 1:', part1(input))

export function part2(input: string): number {
  const matrix = createMatrix(input)
  let totalAccessibleRolls = 0

  while (true) {
    // First pass: identify all accessible rolls (those with < 4 adjacent rolls)
    const rollsToRemove: [number, number][] = []

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === '@') {
          const adjacentRolls = countRolls(
            matrix,
            i,
            j,
            matrix.length,
            matrix[i].length,
            false
          )
          if (adjacentRolls < 4) {
            rollsToRemove.push([i, j])
          }
        }
      }
    }

    // If no more rolls can be removed, we're done
    if (rollsToRemove.length === 0) {
      break
    }

    // Second pass: remove all identified rolls
    for (const [y, x] of rollsToRemove) {
      matrix[y][x] = '.'
    }

    totalAccessibleRolls += rollsToRemove.length
  }

  return totalAccessibleRolls
}

console.log('Day 04 - Part 2:', part2(input))
