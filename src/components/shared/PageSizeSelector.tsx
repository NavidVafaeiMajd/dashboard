import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

type PageSizeSelectorProps = {
   value: number;
   onChange: (size: number) => void;
};

export const PageSizeSelector = ({
   value,
   onChange,
}: PageSizeSelectorProps) => {
   return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
         <span>تعداد سطر:</span>
         <Select
            value={String(value)}
            onValueChange={(val) => onChange(Number(val))}
         >
            <SelectTrigger className="w-20">
               <SelectValue />
            </SelectTrigger>
            <SelectContent>
               {[10, 25, 50, 100].map((num) => (
                  <SelectItem
                     key={num}
                     value={String(num)}
                  >
                     {num}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
};
