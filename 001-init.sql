CREATE TABLE IF NOT EXISTS `measurements` (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  quantity TEXT NOT NULL,
  referenceValueLower REAL NOT NULL CHECK (CAST(referenceValueLower||1 AS REAL) != 0.0),
  referenceValueUpper REAL NOT NULL CHECK (CAST(referenceValueUpper||1 AS REAL) != 0.0)
);