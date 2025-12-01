# Advent of Code 2025 - TypeScript Solutions 🎄

My solutions for [Advent of Code 2025](https://adventofcode.com/2025) implemented in TypeScript.

## Project Structure

```
aoc2025/
├── day01/
│   ├── day01.ts          # Solution implementation
│   └── input.txt         # Puzzle input
├── day02/
│   ├── day02.ts
│   └── input.txt
├── utils/
│   ├── fileUtils.ts      # File loading utilities
│   ├── testUtils.ts      # Testing helpers
│   └── general.ts        # General utility functions
├── package.json
└── README.md
```

## Setup

Install dependencies:

```bash
npm install
```

## Running Solutions

Run a specific day's solution:

```bash
npm run day01
# or
npx tsx day01/day01.ts
```

## Testing

Run tests for all days:

```bash
npm test
```

Run tests for a specific day:

```bash
npm test day01
```

## Development

- **TypeScript**: Configured for modern ES modules
- **Testing**: Jest for unit tests
- **Runtime**: tsx for fast TypeScript execution

## Progress

| Day | Part 1 | Part 2 |
|-----|--------|--------|
| 1   | ⭐     | ⭐     |
| 2   | -      | -      |
| ... | -      | -      |

## Notes

Each day's solution follows a similar structure:
- Read and parse input from `input.txt`
- Implement `part1()` and `part2()` functions
- Export functions for testing
- Execute and log results when run directly

---

⭐ Happy Coding! ⭐
