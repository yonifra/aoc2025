import { readInputFromDir } from '../utils/fileUtils'

const input = readInputFromDir(import.meta.url, 'input.txt')

function getMaxJoltage(str: string): number {
  let maxJoltage = 0

  // Check all pairs of positions (i, j) where i < j
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const firstDigit = parseInt(str[i], 10)
      const secondDigit = parseInt(str[j], 10)
      const joltage = firstDigit * 10 + secondDigit

      if (joltage > maxJoltage) {
        maxJoltage = joltage
      }
    }
  }

  return maxJoltage
}

export function part1(input: string): number {
  const lines = input.trim().split('\n')
  let maxJoltage = 0
  lines.forEach((line) => {
    maxJoltage += getMaxJoltage(line)
  })
  return maxJoltage
}

console.log('Day 03 - Part 1:', part1(input))

function getMaxJoltage12(str: string): number {
  const needed = 12
  const result: string[] = []
  let startIndex = 0

  // Greedily select the largest digit at each step
  for (let i = 0; i < needed; i++) {
    const remaining = needed - i // How many more digits we need
    const maxEndIndex = str.length - remaining // Latest position we can pick from

    // Find the largest digit in the valid range
    let maxDigit = '0'
    let maxDigitIndex = startIndex

    for (let j = startIndex; j <= maxEndIndex; j++) {
      if (str[j] > maxDigit) {
        maxDigit = str[j]
        maxDigitIndex = j
      }
    }

    result.push(maxDigit)
    startIndex = maxDigitIndex + 1
  }

  return parseInt(result.join(''), 10)
}

export function part2(input: string): number {
  const lines = input.trim().split('\n')
  let total = 0
  lines.forEach((line) => {
    total += getMaxJoltage12(line)
  })
  return total
}

console.log('Day 03 - Part 2:', part2(input))
