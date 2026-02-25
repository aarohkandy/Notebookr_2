import "dotenv/config";

const REQUIRED_KEYS = ["DATABASE_URL", "SESSION_SECRET", "JWT_SECRET"];

const PLACEHOLDER_PATTERNS = [
  /^your_/i,
  /replace_with_/i,
  /_here$/i,
  /^postgresql:\/\/user:password@host\/database/i,
];

function looksLikePlaceholder(value) {
  if (!value) return true;
  const trimmed = value.trim();
  if (!trimmed) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(trimmed));
}

const missingRequired = REQUIRED_KEYS.filter((key) =>
  looksLikePlaceholder(process.env[key]),
);

const hasAiKey =
  !looksLikePlaceholder(process.env.OPENROUTER_KEY1) ||
  !looksLikePlaceholder(process.env.AI_INTEGRATIONS_OPENAI_API_KEY);

const warnings = [];
if (looksLikePlaceholder(process.env.STRIPE_SECRET_KEY)) {
  warnings.push(
    "- STRIPE_SECRET_KEY is empty (okay for now if you are not testing billing).",
  );
}
if (looksLikePlaceholder(process.env.RESEND_API_KEY)) {
  warnings.push(
    "- RESEND_API_KEY is empty (okay for now if you are not testing email verification).",
  );
}

if (missingRequired.length > 0 || !hasAiKey) {
  console.error("✗ Environment check failed.");
  if (missingRequired.length > 0) {
    console.error("Missing required values:");
    for (const key of missingRequired) {
      console.error(`  - ${key}`);
    }
  }
  if (!hasAiKey) {
    console.error(
      "  - At least one AI key is required: OPENROUTER_KEY1 or AI_INTEGRATIONS_OPENAI_API_KEY",
    );
  }
  process.exit(1);
}

console.log("✓ Required environment variables look good.");
if (warnings.length > 0) {
  console.log("");
  console.log("Optional values not set:");
  for (const warning of warnings) {
    console.log(warning);
  }
}
