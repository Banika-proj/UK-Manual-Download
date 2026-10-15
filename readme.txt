UK Manual Downloads Tracker — Standalone Offline Version
==========================================================

CONTENTS
--------
  index.html          — the app
  styles.css          — styling
  app.js               — all logic (scheduling, checklist, reports, notes, logs)
  fonts.css + fonts/   — bundled fonts (no internet required)
  chart.umd.min.js    — Chart.js, bundled locally (no internet required)
  readme.txt          — this file


HOW TO USE
----------
1. Keep all files together in the same folder (don't move index.html out on
   its own — it needs the others sitting next to it).
2. Double-click index.html to open it in your browser (Chrome, Edge, or
   Firefox all work well). No server, no install, no internet connection
   needed — ever, including the very first time you open it.


DATA STORAGE
------------
All data is saved automatically in your browser's local storage, on this
device, in this browser.
  - Your entries are still there next time you open index.html.
  - Data is NOT shared with any other device or browser — this is a fully
    local, single-user tool.
  - Clearing this browser's site data for this file will erase your records.

To back up your data, or move it to another computer, use the "Backup
(JSON)" button on the Download Logs page, then "Restore backup" on the
other device. The CSV export buttons are for reporting, not for backup —
they don't include everything needed to restore your data.


PAGES
-----
  Today's Checklist  — Mark daily PDF downloads as received; add notes.
  Timeliness Report  — A colour-coded summary of how promptly files arrived.
  Publications       — Manage the list of publications and their schedules.
  Download Logs      — A full history, with CSV export and backup/restore.


FREQUENCIES SUPPORTED
---------------------
  Daily | Weekly | Fortnightly | Monthly | Bi-Monthly | Quarterly


NOTES
-----
  - The app ships with 84 pre-loaded sample publications across all
    frequencies. Edit, add, or delete them from the Publications page.
  - Each checklist entry supports multiple dated notes; old notes are never
    overwritten — new ones are appended to the history.


REQUIREMENTS
------------
  Any modern web browser released after 2020.
  JavaScript must be enabled.
