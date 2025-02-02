// drizzle.config.ts
import type { Config } from "drizzle-kit";
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },

  dialect: "turso",
} satisfies Config;