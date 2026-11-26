import { mkdirSync, writeFileSync } from "node:fs";

// Entry text for "Name the Robot Band" (make.fun):
// a band of parking-meter robots whose hit single is the meter's own
// warning — and the song expires before it ever charts.
const ENTRY =
  'The Parking Meters \u2014 hit single "Your Time Is Up" expired before it charted.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
