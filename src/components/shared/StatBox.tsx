import type { LucideProps } from "lucide-react";

interface Props {
   data: {
      id: number;
      icon: React.ForwardRefExoticComponent<
         Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >;
      title: string;
      count: number;
      color: string;
   }[];
}

const StatBox = ({ data }: Props) => {
   return (
      <div>
         {data.map((data) => {
            const Icon = data.icon;
            return (
               <div
                  key={data.id}
                  className={`flex items-center gap-x-10 px-5 h-40 bg-bgBack max-w-80 border-2 rounded-md shadow-sm border-dotted`}
                  style={{
                     borderColor: data.color,
                  }}
               >
                  <div
                     className="p-2  size-12 rounded-full border-2 border-dotted"
                     style={{
                        borderColor: data.color,
                     }}
                  >
                     <Icon color={data.color} />
                  </div>
                  <div className="flex flex-col items-start gap-y-2">
                     <h2
                        className={` text-2xl font-medium`}
                        style={{
                           color: data.color,
                        }}
                     >
                        {data.title}
                     </h2>
                     <h2
                        className={` text-3xl underline`}
                        style={{
                           color: data.color,
                        }}
                     >
                        {data.count}
                     </h2>
                  </div>
               </div>
            );
         })}
      </div>
   );
};
export default StatBox;
