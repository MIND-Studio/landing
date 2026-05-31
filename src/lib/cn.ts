/**
 * A tiny class-name joiner for server components.
 *
 * We deliberately do NOT import `cn` from "@mind-studio/ui": that package is a
 * "use client" module, so its `cn` export is a *client reference* and calling it
 * during server render throws ("call c() from the server but c is on the
 * client"). Our usage is simple conditional joins with no conflicting Tailwind
 * utilities, so a plain filter-and-join is all we need.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
