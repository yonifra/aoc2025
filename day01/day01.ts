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
      currentPosition = (currentPosition - distance + 100) % 100
    } else {
      currentPosition = (currentPosition + distance) % 100
    }

    if (currentPosition === 0) {
      timesAtZero++
    }
  })

  return timesAtZero
}

console.log(part1(input))
