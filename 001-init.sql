CREATE TABLE IF NOT EXISTS `measurements` (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  quantity TEXT NOT NULL,
  referenceValueLower REAL NOT NULL,
  referenceValueUpper REAL NOT NULL
);