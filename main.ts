import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off — one original dad joke, one line, at most
// 140 characters. Judge weighs: a real dad joke first, punchline fast
// and clean, fresh, tight and rhythmic, groan earned. Playbook joke
// template: rule -> literal violation -> flat consequence. Draft: dad
// says the cloud stores everything -> son takes it literally and
// leaves his homework outside -> blames the rain.
// REVISED: the punchline arrived one clause too late ("and blamed the
// rain" explained the joke). Now the setup is dad-voice ("keeps
// everything safe") and the line ends on the image itself — homework
// sitting in the rain — so the groan lands without explanation.
const text =
  "I told my son the cloud keeps everything safe, so he left his homework outside in the rain.\n";

// Gate: 1-140 characters, single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry must be 1-140 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
