/**
 * Testing utilities for Advent of Code solutions
 */

/**
 * Run a solution function with test cases
 * @param solutionFn - The solution function to test
 * @param testCases - Array of [input, expected] pairs
 * @param label - Optional label for the test suite
 */
export function runTests<T, R>(
  solutionFn: (input: T) => R,
  testCases: Array<[T, R]>,
  label?: string
): void {
  console.log(label ? `\n=== ${label} ===` : '\n=== Running Tests ===')

  let passed = 0
  let failed = 0

  testCases.forEach(([input, expected], index) => {
    const result = solutionFn(input)
    const isEqual = JSON.stringify(result) === JSON.stringify(expected)

    if (isEqual) {
      console.log(`✓ Test ${index + 1} passed`)
      passed++
    } else {
      console.log(`✗ Test ${index + 1} failed`)
      console.log(`  Expected: ${expected}`)
      console.log(`  Got:      ${result}`)
      failed++
    }
  })

  console.log(`\nResults: ${passed} passed, ${failed} failed\n`)
}

/**
 * Assert that two values are equal
 * @param actual - The actual value
 * @param expected - The expected value
 * @param message - Optional error message
 */
export function assertEquals<T>(
  actual: T,
  expected: T,
  message?: string
): void {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    const errorMsg =
      message || `Assertion failed: expected ${expected}, got ${actual}`
    throw new Error(errorMsg)
  }
}

/**
 * Measure execution time of a function
 * @param fn - The function to measure
 * @param label - Optional label for the measurement
 * @returns The result of the function
 */
export function measureTime<T>(fn: () => T, label?: string): T {
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  const duration = (end - start).toFixed(2)

  console.log(
    label ? `${label}: ${duration}ms` : `Execution time: ${duration}ms`
  )

  return result
}

/**
 * Run a solution with example and real input
 * @param part1Fn - Part 1 solution function
 * @param part2Fn - Part 2 solution function
 * @param exampleInput - Example input string
 * @param realInput - Real input string
 * @param exampleAnswers - Expected answers for example [part1, part2]
 */
export function runSolution(
  part1Fn: (input: string) => number | string,
  part2Fn: (input: string) => number | string,
  exampleInput: string,
  realInput: string,
  exampleAnswers?: [number | string, number | string]
): void {
  console.log('=== Example Input ===')

  const examplePart1 = part1Fn(exampleInput)
  console.log(`Part 1: ${examplePart1}`)
  if (exampleAnswers?.[0] !== undefined) {
    console.log(
      examplePart1 === exampleAnswers[0]
        ? '✓ Correct'
        : `✗ Expected ${exampleAnswers[0]}`
    )
  }

  const examplePart2 = part2Fn(exampleInput)
  console.log(`Part 2: ${examplePart2}`)
  if (exampleAnswers?.[1] !== undefined) {
    console.log(
      examplePart2 === exampleAnswers[1]
        ? '✓ Correct'
        : `✗ Expected ${exampleAnswers[1]}`
    )
  }

  console.log('\n=== Real Input ===')
  const realPart1 = measureTime(() => part1Fn(realInput), 'Part 1')
  console.log(`Part 1 Answer: ${realPart1}`)

  const realPart2 = measureTime(() => part2Fn(realInput), 'Part 2')
  console.log(`Part 2 Answer: ${realPart2}`)
}
