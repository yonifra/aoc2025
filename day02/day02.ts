import { readInputFromDir } from '../utils/fileUtils'

const input = readInputFromDir(import.meta.url, 'input.txt')

function isInvalid(id: number): boolean {
  const idStr = id.toString()
  if (idStr.length % 2 !== 0) {
    return false
  }

  const firstHalf = idStr.slice(0, idStr.length / 2)
  const secondHalf = idStr.slice(idStr.length / 2)

  return firstHalf === secondHalf
}

function isInvalidPart2(id: number): boolean {
  const idStr = id.toString()
  const len = idStr.length
  
  // Try all possible pattern lengths (from 1 to len/2)
  // The pattern must divide evenly into the total length
  for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
    if (len % patternLen !== 0) {
      continue
    }
    
    const pattern = idStr.slice(0, patternLen)
    const repetitions = len / patternLen
    
    // Check if repeating this pattern creates the whole ID
    if (pattern.repeat(repetitions) === idStr) {
      return true
    }
  }
  
  return false
}

export function part1(input: string): number {
  const ranges = input.trim().split(',')
  let sumOfInvalidIds = 0

  ranges.forEach((range) => {
    const [start, end] = range.trim().split('-').map(Number)

    for (let i = start; i <= end; i++) {
      if (isInvalid(i)) {
        sumOfInvalidIds += i
      }
    }
  })

  return sumOfInvalidIds
}

export function part2(input: string): number {
  const ranges = input.trim().split(',')
  let sumOfInvalidIds = 0

  ranges.forEach((range) => {
    const [start, end] = range.trim().split('-').map(Number)

    for (let i = start; i <= end; i++) {
      if (isInvalidPart2(i)) {
        sumOfInvalidIds += i
      }
    }
  })

  return sumOfInvalidIds
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Part 1:', part1(input))
  console.log('Part 2:', part2(input))
}
