import { Button } from "@mind-studio/ui";
import { DOCK_URL, POD_REGISTER_URL } from "@/lib/links";

/**
 * The site's one conversion action, used in the hero, pricing, and closing
 * bands. Primary = self-serve pod creation; secondary = sign in for people who
 * already have a pod. Both link out to the live hosts (see src/lib/links.ts).
 */
export function CtaButtons({
  className = "",
  showSignIn = true,
}: {
  className?: string;
  showSignIn?: boolean;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button asChild size="lg" className="btn-glow">
        <a href={POD_REGISTER_URL}>Create your pod</a>
      </Button>
      {showSignIn && (
        <Button asChild size="lg" variant="outline">
          <a href={DOCK_URL}>Sign in</a>
        </Button>
      )}
    </div>
  );
}
