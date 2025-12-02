import { readInputFromDir } from '../utils/fileUtils'

const input = readInputFromDir(import.meta.url)

export function part1(input: string): number {
  const lines = input.trim().split('\n')
  let timesAtZero = 0
  let currentPosition = 50

  lines.forEach((line) => {
    const direction = line.trim().at(0)
    const distance = parseInt(line.trim().slice(1), 10)

    if (direction === 'L') {
      currentPosition = (((currentPosition - distance) % 100) + 100) % 100
    } else {
      currentPosition = (currentPosition + distance) % 100
    }

    if (currentPosition === 0) {
      timesAtZero++
    }
  })

  return timesAtZero
}

export function part2(input: string): number {
  const lines = input.trim().split('\n')
  let timesCrossingZero = 0
  let currentPosition = 50

  lines.forEach((line) => {
    const direction = line.trim().at(0)
    const distance = parseInt(line.trim().slice(1), 10)

    if (direction === 'L') {
      // For left rotation, count every position that equals 0
      for (let i = 1; i <= distance; i++) {
        const pos = (currentPosition - i + 100) % 100
        if (pos === 0) {
          timesCrossingZero++
        }
      }
      currentPosition = (((currentPosition - distance) % 100) + 100) % 100
    } else {
      // For right rotation, count every position that equals 0
      for (let i = 1; i <= distance; i++) {
        const pos = (currentPosition + i) % 100
        if (pos === 0) {
          timesCrossingZero++
        }
      }
      currentPosition = (currentPosition + distance) % 100
    }
  })

  return timesCrossingZero
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Part 1:', part1(input))
  console.log('Part 2:', part2(input))
}
