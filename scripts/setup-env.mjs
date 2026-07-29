import { randomBytes } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const envPath = path.join(rootDir, ".env");
const envExamplePath = path.join(rootDir, ".env.example");

if (existsSync(envPath)) {
  console.log("✓ .env already exists. Leaving it unchanged.");
  process.exit(0);
}

if (!existsSync(envExamplePath)) {
  console.error("✗ Missing .env.example. Cannot generate .env.");
  process.exit(1);
}

let envContent = readFileSync(envExamplePath, "utf8");
const sessionSecret = randomBytes(32).toString("hex");
const jwtSecret = randomBytes(32).toString("hex");

envContent = envContent
  .replace(/^SESSION_SECRET=.*$/m, `SESSION_SECRET=${sessionSecret}`)
  .replace(/^JWT_SECRET=.*$/m, `JWT_SECRET=${jwtSecret}`);

writeFileSync(envPath, envContent, "utf8");

console.log("✓ Created .env from .env.example");
console.log("✓ Generated SESSION_SECRET and JWT_SECRET automatically");
console.log("");
console.log("Next steps:");
console.log("1) Fill DATABASE_URL");
console.log("2) Add at least one AI key (OPENROUTER_KEY1 or AI_INTEGRATIONS_OPENAI_API_KEY)");
console.log("3) Run: npm run env:check");
