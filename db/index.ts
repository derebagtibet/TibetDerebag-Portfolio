import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  const runtimeEnv =
    typeof globalThis !== "undefined"
      ? (globalThis as { env?: { DB?: unknown } }).env
      : undefined;

  const dbBinding = runtimeEnv?.DB ?? (typeof process !== "undefined" ? process.env.DB : undefined);

  if (!dbBinding) {
    throw new Error(
      "No database binding was found. This app is configured for a platform-specific DB binding and is not available in the current runtime."
    );
  }

  return drizzle(dbBinding as never, { schema });
}
