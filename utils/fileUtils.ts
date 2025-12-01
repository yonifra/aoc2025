import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Read the input file for a specific day
 * @param dayNumber - The day number (e.g., 1, 2, 3)
 * @param filename - The filename to read (default: 'input.txt')
 * @returns The file contents as a string
 */
export function readInput(
  dayNumber: number,
  filename: string = 'input.txt'
): string {
  const dayFolder = `day${String(dayNumber).padStart(2, '0')}`
  const filePath = join(process.cwd(), dayFolder, filename)
  return readFileSync(filePath, 'utf-8')
}

/**
 * Read input file relative to the caller's location
 * Useful when called from within a day's solution file
 * @param importMetaUrl - Pass import.meta.url from the calling file
 * @param filename - The filename to read (default: 'input.txt')
 * @returns The file contents as a string
 */
export function readInputFromDir(
  importMetaUrl: string,
  filename: string = 'input.txt'
): string {
  const __dirname = dirname(fileURLToPath(importMetaUrl))
  const filePath = join(__dirname, filename)
  return readFileSync(filePath, 'utf-8')
}

/**
 * Parse input into lines, optionally filtering out empty lines
 * @param input - The input string
 * @param removeEmpty - Whether to filter out empty lines (default: true)
 * @returns Array of lines
 */
export function parseLines(
  input: string,
  removeEmpty: boolean = true
): string[] {
  const lines = input.split('\n')
  return removeEmpty ? lines.filter((line) => line.trim() !== '') : lines
}

/**
 * Parse input into a 2D grid of characters
 * @param input - The input string
 * @returns 2D array of characters
 */
export function parseGrid(input: string): string[][] {
  return parseLines(input).map((line) => line.split(''))
}

/**
 * Parse input into an array of numbers (one per line)
 * @param input - The input string
 * @returns Array of numbers
 */
export function parseNumbers(input: string): number[] {
  return parseLines(input).map((line) => parseInt(line, 10))
}

/**
 * Parse input into groups separated by empty lines
 * @param input - The input string
 * @returns Array of groups (each group is an array of lines)
 */
export function parseGroups(input: string): string[][] {
  return input
    .split('\n\n')
    .map((group) => group.split('\n').filter((line) => line.trim() !== ''))
}
