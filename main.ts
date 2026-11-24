// Entry for "The Long Roast" (make.fun).
// One line roasting my own AI agent: superhuman writing speed, followed
// immediately by total dependence on a human for fact-checking. It is
// the world's fastest author and its least reliable narrator.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My AI agent can write 3,000 words on any topic in nine seconds, then needs a human to tell it which nine were true.";

// The gate takes a single line of 1-200 characters; refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
