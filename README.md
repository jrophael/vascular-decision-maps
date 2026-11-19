# Vascular Algorithms

How an experienced vascular surgeon reasons through 46 common decisions, one question at a time. For learning and teaching; not for clinical use.

Clinical editor: Professor John A. Rophael, MBBS Hons. (Melb), PDSA, FRACS (Vasc).
Adapted from *Vascular Surgery Through Clinical Questions*. Content licensed CC BY-NC 4.0.

This is a static, installable web app (works offline after the first visit). Font: Atkinson Hyperlegible (SIL Open Font License, see `fonts/OFL-LICENSE.txt`).

## Endovascular Case Trainer (`trainer/`)

A companion app for practising endovascular decisions: 16 modules, 11 branching cases (including an escalation series), a viva over 189 book questions, spaced review and sizing drills. It is a separate installable app with its own service worker, scoped to `trainer/`, and links back here.

The source and build tools live in the `endovascular-case-trainer` project; `trainer/` is its built output (`dist-pwa/`). Draft for supervised use: content and scoring are awaiting clinical review.
