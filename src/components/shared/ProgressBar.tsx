import type { ProgressProps } from "@radix-ui/react-progress";
import { Progress } from "../ui/progress";
import React from "react";

interface Props
   extends Omit<ProgressProps, "value">,
      React.RefAttributes<HTMLDivElement> {
   value: number;
}

const ProgressBar = ({ value, ...props }: Props) => {
   let colorClass = "bg-green-500"; // default

   if (value <= 30) {
      colorClass = "bg-red-500";
   } else if (value <= 70) {
      colorClass = "bg-yellow-500";
   }

   return (
      <Progress
         {...props}
         value={value}
         colorClass={colorClass}
         className="relative h-4 w-full overflow-hidden rounded bg-gray-200"
      />
   );
};

export default ProgressBar;
