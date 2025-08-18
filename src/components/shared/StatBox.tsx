import type { LucideProps } from "lucide-react";

interface Props {
   Icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
   >;
   title: string;
   counter: number;
   color: string;
}

const StatBox = ({ color, counter, Icon, title }: Props) => {
   return (
      <div
         className={`flex items-center gap-x-10 px-5 h-40 bg-bgBack max-w-80 border-2 rounded-md shadow-sm border-dotted`}
         style={{
            borderColor: color,
         }}
      >
         <div
            className="p-2  size-12 rounded-full border-2 border-dotted"
            style={{
               borderColor: color,
            }}
         >
            <Icon color={color} />
         </div>
         <div className="flex flex-col items-start gap-y-2">
            <h2
               className={` text-2xl font-medium`}
               style={{
                  color,
               }}
            >
               {title}
            </h2>
            <h2
               className={` text-3xl underline`}
               style={{
                  color,
               }}
            >
               {counter}
            </h2>
         </div>
      </div>
   );
};
export default StatBox;
