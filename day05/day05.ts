import { readInputFromDir } from '../utils/fileUtils'

const input = readInputFromDir(import.meta.url, 'input.txt')
const ranges: [number, number][] = []

const getRange = (str: string): [number, number] => {
  const [start, end] = str.split('-').map(Number)
  return [start, end]
}

const isFresh = (value: number): boolean => {
  for (let i = 0; i < ranges.length; i++) {
    if (value >= ranges[i][0] && value <= ranges[i][1]) {
      return true
    }
  }

  return false
}

export function part1(input: string): number {
  const lines = input.split('\n')
  let freshIngredients = 0

  lines.forEach((l) => {
    if (l.includes('-')) {
      const range = getRange(l)
      ranges.push(range)
    } else if (l === '') {
    } else {
      if (isFresh(parseInt(l))) freshIngredients++
    }
  })

  return freshIngredients
}

export function part2(): number {
  function mergeRanges(): [number, number][] {
    ranges.sort((a, b) => a[0] - b[0])
    const merged: [number, number][] = []

    for (const range of ranges) {
      if (merged.length === 0 || merged[merged.length - 1][1] < range[0] - 1) {
        merged.push(range)
      } else {
        merged[merged.length - 1][1] = Math.max(
          merged[merged.length - 1][1],
          range[1]
        )
      }
    }

    return merged
  }

  let size = 0
  mergeRanges().forEach((r: [number, number]) => {
    size += r[1] - r[0] + 1
  })

  return size
}

console.log('Day 05 Part 1:', part1(input))
console.log('Day 05 Part 2:', part2())
