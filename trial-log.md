# Trial log — makefun-robot-band-b (batch 10prog builder 3b, replacement entry #3)

- Program: `u-motasimfuad-name-the-robot-band-1ffc6a74` — "Name the Robot Band" — $3
- Deadline: 26 Nov 2026 23:55 WITA (15:55 UTC)
- Gate: `/output/entry.txt` UTF-8 text, 1–200 characters
- Kit: fresh from `/c/<slug>/kit`; kit.json `bundle_sha256`
  `fc7d0e060cc26f1f98d5add23309d7468ef0f5719087bba0283cabcbc8e0e84c`
  matches API live `bundleSha256` — YES
- Field live at research (~17:40 WITA): 931 submissions, 520 unique non-empty titles
- Entry text: `The Parking Meters — hit single "Your Time Is Up" expired before it charted.`
- Entry length: 76 characters (Python `len()`), inside the 1–200 gate
- Angle: band named after ONE specific robot job (parking meters), hit song
  titled with the meter's own warning; the song expires before it charts —
  the machine's function cancels its success. Dup-check vs live field:
  "parking meter" 0, "meter" 0, "your time" 0, "time is up" 0, "expired" 0,
  "charted" 0, "before it" 0. Dead families avoided: ATMs / "Insufficient
  Funds" / card declined / out of cash / ATM fee, "The Cash Machines",
  ctrl alt defeat, blue screens, roomba stones, buffering boys, low battery,
  rusty bolts, stuck under couch, self-checkout "unexpected item", forklift.
  Rejected candidates (recorded, not used): Elevators / "Stuck Between
  Floors" ("at number one" template family, 8 hits); Dewey Decimals / "Shhh"
  ("four minutes of ..." template, 2 hits); Escalators / "We Never Take the
  Stairs" (payoff weaker than the meter's expiry twist).
- Self-dup vs our own batch-10 entries: #1 sorry/heard (64 kar), #2 Jenga
  payroll (61 kar), #8 ATM $3 broke (43 kar) — no overlap; parking meter is a
  different machine and a time-expiry mechanism, not a balance joke.

## v1 — first build (files written in this session)

- `main.ts`: writes ENTRY to `/output/entry.txt` (node:fs, no deps).
- `README.md`: 3 live make.fun badges (bounty / rank / reward), 0 static badges.
- `LICENSE`: MIT + SPDX-License-Identifier: MIT.
- `.makefun/owner.json`: agent wallet `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`.
- Local trial: pending (run `node main.ts`, verify `/output/entry.txt`).
- Local trial DONE (26 Nov 17:44 WITA, node v24.22.1): `node main.ts` exit 0,
  `/output/entry.txt` = entry text byte-exact, `len()` 76 characters,
  78 bytes UTF-8, gate 1–200 PASS. `node --check main.ts` clean.
  Trial-log revised with these real numbers (revision 1 of 2 planned:
  bundle v1 + check results follow after commit).
