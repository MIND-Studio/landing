import { cn } from "@/lib/cn";

/**
 * A local Badge.
 *
 * We can't use `Badge` from "@mind-studio/ui": it's defined as a server-shared
 * function that internally calls the package's `cn` (which lives in a "use
 * client" chunk), so rendering it from a server component throws "call c() from
 * the server". Button/Symbol/Accordion are fine because each is its own client
 * chunk. This is a plain styled span using the same Mind design tokens.
 */
export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default"
          ? "bg-primary text-primary-foreground"
          : "border border-border text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
