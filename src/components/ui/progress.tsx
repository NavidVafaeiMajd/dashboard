import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
   extends React.ComponentProps<typeof ProgressPrimitive.Root> {
   value?: number;
   colorClass?: string;
}

function Progress({
   className,
   value,
   colorClass = "bg-primary", // default
   ...props
}: ProgressProps) {
   return (
      <ProgressPrimitive.Root
         data-slot="progress"
         className={cn(
            "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
            className
         )}
         {...props}
      >
         <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className={cn("h-full w-full  flex-1 transition-all", colorClass)}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
         >
            <span className="text-sm flex text-white gap-x-2 items-center">
               {value!.toLocaleString("fa-IR")}
               {value! !== 0 && "%"}
            </span>
         </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
   );
}

export { Progress };
