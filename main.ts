// The Moon Finally Answers Back — make.fun entry
// u-mang-the-moon-finally-answers-back-781a7ec1
//
// Writes one line, in the Moon's voice, to /output/entry.txt.
// The gate requires UTF-8 text of 1-240 characters, a single line,
// and not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Four billion years of wishes and howls, and not one of you has ever wished me a good night. I see how it is.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function validate(text: string): void {
  // Must be valid UTF-8 text: re-encoding must round-trip exactly.
  const roundTrip = Buffer.from(text, "utf8").toString("utf8");
  if (roundTrip !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
  // Character count (code points), gate is 1-240.
  const length = [...text].length;
  if (length < 1 || length > 240) {
    throw new Error(`entry is ${length} characters, must be 1-240`);
  }
  // Single line: no line breaks at all.
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  // Not only whitespace.
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // No leading or trailing whitespace: the file must hold exactly the line.
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

validate(ENTRY);

// Create /output if needed. Never delete the output directory itself:
// the grader mounts it and runs as an unprivileged user.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read the file back and re-validate it, so a write fault is caught here
// instead of at the gate.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the validated line");
}
validate(written);

console.log(`Wrote ${[...ENTRY].length} characters to ${OUT_FILE}`);
console.log(ENTRY);
