// Neon Postgres client for the landing page's own `landing` schema.
// Shares the DATABASE_URL with the main Pursuit backend's Neon project, but
// only ever touches tables under `landing.*` — never the app's `public.*` tables.
import { neon } from "@neondatabase/serverless";

let _sql: ReturnType<typeof neon> | undefined;

export function getSql() {
  if (!_sql) {
    const DATABASE_URL = process.env["DATABASE_URL"];
    if (!DATABASE_URL) {
      throw new Error("Missing environment variable: DATABASE_URL");
    }
    _sql = neon(DATABASE_URL);
  }
  return _sql;
}
