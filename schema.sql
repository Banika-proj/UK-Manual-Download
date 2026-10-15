CREATE TABLE IF NOT EXISTS publications (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    link TEXT,
    frequency TEXT NOT NULL,
    publication_date TEXT,
    expected_date TEXT,
    login TEXT,
    password TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    deleted_at TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS download_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    publication_id INTEGER NOT NULL,
    log_date TEXT NOT NULL,
    downloaded TEXT,
    time_downloaded TEXT,
    reason_when_no TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    created_by TEXT,
    FOREIGN KEY (publication_id) REFERENCES publications(id)
);

CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    publication_id INTEGER NOT NULL,
    entry_date TEXT NOT NULL,
    note_date TEXT,
    comment TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    created_by TEXT,
    FOREIGN KEY (publication_id) REFERENCES publications(id)
);

CREATE INDEX IF NOT EXISTS idx_download_logs_publication_date
ON download_logs(publication_id, log_date);

CREATE INDEX IF NOT EXISTS idx_notes_publication
ON notes(publication_id);