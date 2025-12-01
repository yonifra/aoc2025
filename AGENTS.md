# AI Agent Guide for Advent of Code 2025 Repository

This document provides guidance for AI agents working with this Advent of Code 2025 TypeScript solutions repository.

## Project Overview

This is an Advent of Code 2025 solutions repository using **TypeScript** with:
- **Runtime**: tsx for fast TS execution
- **Testing**: Jest with ts-jest
- **Module System**: ES Modules (ESM)

## Repository Structure

```
aoc2025/
├── day01/              # Each day has its own folder
│   ├── day01.ts        # Solution implementation
│   ├── day01.test.ts   # Optional tests
│   └── input.txt       # Puzzle input
├── utils/              # Shared utilities
│   ├── fileUtils.ts    # File reading and parsing
│   ├── testUtils.ts    # Testing helpers
│   └── general.ts      # General utility functions
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## When Creating New Day Solutions

### 1. File Structure
Create a new folder for each day:
```bash
dayXX/
  ├── dayXX.ts       # Main solution file
  └── input.txt      # Puzzle input (user will provide)
```

### 2. Solution Template
Use this template for `dayXX.ts`:

```typescript
import { readInputFromDir, parseLines } from '../utils/fileUtils.js';

function part1(input: string): number {
  const lines = parseLines(input);
  // Solution logic here
  return 0;
}

function part2(input: string): number {
  const lines = parseLines(input);
  // Solution logic here
  return 0;
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const input = readInputFromDir(import.meta.url);

  console.log('Part 1:', part1(input));
  console.log('Part 2:', part2(input));
}

export { part1, part2 };
```

### 3. Add npm Script
Add a script to `package.json`:
```json
"dayXX": "tsx dayXX/dayXX.ts"
```

### 4. Optional Test File
Create `dayXX.test.ts` if tests are needed:

```typescript
import { describe, it, expect } from '@jest/globals';
import { part1, part2 } from './dayXX.js';

describe('Day XX', () => {
  const exampleInput = `example input here`;

  it('part1 should solve example', () => {
    expect(part1(exampleInput)).toBe(expectedValue);
  });

  it('part2 should solve example', () => {
    expect(part2(exampleInput)).toBe(expectedValue);
  });
});
```

## Available Utilities

### File Utilities (`utils/fileUtils.ts`)
- `readInput(dayNumber, filename?)` - Read input by day number
- `readInputFromDir(import.meta.url, filename?)` - Read input from current directory
- `parseLines(input, removeEmpty?)` - Parse into lines
- `parseGrid(input)` - Parse into 2D character grid
- `parseNumbers(input)` - Parse into array of numbers
- `parseGroups(input)` - Parse into groups separated by blank lines

### Test Utilities (`utils/testUtils.ts`)
- `runTests(fn, testCases, label?)` - Run test cases
- `assertEquals(actual, expected, message?)` - Assert equality
- `measureTime(fn, label?)` - Measure execution time
- `runSolution(part1Fn, part2Fn, exampleInput, realInput, exampleAnswers?)` - Run complete solution

### General Utilities (`utils/general.ts`)
Math: `sum`, `product`, `min`, `max`, `gcd`, `lcm`
Arrays: `unique`, `chunk`, `countOccurrences`, `range`, `permutations`, `combinations`
Grid: `transpose`, `rotateClockwise`, `rotateCounterClockwise`
Distance: `manhattanDistance`, `euclideanDistance`
Other: `deepClone`, `arraysEqual`, `memoize`

## Running Solutions

```bash
# Run a specific day
npm run dayXX

# Run tests
npm test

# Run tests for specific day
npm test dayXX

# Type check
npm run type-check
```

## Important TypeScript Considerations

1. **ES Modules**: This project uses ESM
   - Use `.js` extensions in import statements (even for `.ts` files)
   - Example: `import { readInput } from '../utils/fileUtils.js';`

2. **Type Safety**: Enable strict mode
   - Add proper type annotations
   - Avoid `any` types when possible

3. **Performance**: For slow solutions
   - Use `measureTime()` to identify bottlenecks
   - Consider memoization with `memoize()` utility
   - Use efficient data structures (Set, Map)

## Best Practices for AI Agents

1. **Always create the day folder structure** before implementing solutions
2. **Use the provided utilities** instead of reimplementing common functionality
3. **Export part1 and part2 functions** for testing
4. **Add the npm script** to package.json for easy execution
5. **Include example tests** when the problem provides test cases
6. **Use TypeScript types** appropriately for better code quality
7. **Import with .js extensions** even for TypeScript files (ESM requirement)
8. **Keep solutions in their respective day folders** - don't modify other days
9. **Update README.md progress table** when completing days

## Common Patterns

### Reading Input
```typescript
// From within day file
const input = readInputFromDir(import.meta.url);

// Or by day number
const input = readInput(1); // for day 1
```

### Parsing Common Formats
```typescript
// Lines of text
const lines = parseLines(input);

// Grid of characters
const grid = parseGrid(input);

// Numbers
const numbers = parseNumbers(input);

// Groups separated by blank lines
const groups = parseGroups(input);
```

### Testing Solutions
```typescript
import { measureTime, runSolution } from '../utils/testUtils.js';

const example = `...`;
const input = readInputFromDir(import.meta.url);

runSolution(part1, part2, example, input, [expectedPart1, expectedPart2]);
```

## Troubleshooting

- **Module not found errors**: Check that imports use `.js` extensions
- **Type errors**: Run `npm run type-check` to see all type issues
- **Test failures**: Ensure test files end in `.test.ts`
- **Performance issues**: Use `measureTime()` and consider optimization

## Dependencies

Run `npm install` to install:
- `typescript` - TypeScript compiler
- `tsx` - TypeScript executor
- `jest` - Testing framework
- `ts-jest` - Jest TypeScript integration
- `@types/node` - Node.js type definitions
- `@types/jest` - Jest type definitions

---

**Remember**: Each day's solution should be self-contained within its folder, using shared utilities when appropriate. Keep code clean, typed, and testable.
