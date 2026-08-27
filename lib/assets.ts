import fs from "node:fs";
import path from "node:path";

/**
 * Build-time check for whether an asset has actually been supplied.
 *
 * Pratik's headshot and the PotatoAIHub screenshots are still to be dropped in.
 * Rather than shipping broken image icons, components ask this first and fall
 * back to a deliberate placeholder — then upgrade automatically the moment the
 * real file appears in public/.
 *
 * Server-side only. Never import this into a client component.
 */
export function publicFileExists(relativePath: string): boolean {
  try {
    const clean = relativePath.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", clean));
  } catch {
    return false;
  }
}
