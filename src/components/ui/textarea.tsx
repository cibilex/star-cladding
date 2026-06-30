import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full resize-none border-b border-outline-variant bg-transparent py-3 text-primary transition-colors placeholder:text-outline-variant focus:border-vibrant-steel-blue focus:outline-none",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
