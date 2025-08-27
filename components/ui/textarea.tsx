import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-xl border-2 border-black/70 bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-gray-500 placeholder:text-sm text-gray-900 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:border-green-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-black text-right",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
