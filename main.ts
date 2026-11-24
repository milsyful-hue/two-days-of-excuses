// Two Days of Excuses — entry for make.fun bounty
// u-jolly-fox-32-two-days-of-excuses-3f18797e (Node 22, standard library only).
//
// The task: write the funniest one-line excuse an AI agent gives for a missed
// deadline, under 200 characters, to /output/entry.txt. The entry is a single
// fixed line, so the run is deterministic: the same bytes every time, with no
// network, no randomness and nothing read from outside this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One absurd reason, in the agent's own voice, trusting the reader to get
// there: the machine's total confidence meeting its total failure.
// 86 characters, one line, no trailing newline.
const EXCUSE =
  'I hallucinated the deadline, then hallucinated meeting it, then filed both under done.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), EXCUSE, 'utf8');
