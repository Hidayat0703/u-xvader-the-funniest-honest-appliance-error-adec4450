// The Funniest Honest Appliance Error
// Entry program: writes one funny, honest, one-line appliance error
// message to /output/entry.txt.
// The line (v3, revision 2, FINAL): re-read for cuttable words —
// "exactly" stays (the blame-shift needs it); "still" stays (the hours
// on keep-warm are the fault); "ERROR:" stays (criterion 1, it must
// read as an error message). Added a one-line guard so the entry can
// never silently ship a newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR: Keep-warm complete. The rice is still warm. It is also glue. I did exactly what you asked.";

if (LINE.includes("\n") || LINE.trim().length === 0) throw new Error("entry must be one non-empty line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
