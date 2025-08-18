import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { goalsData } from "./const";

const TrackGoals = () => {
   return (
      <div>
         <DataTable
            columns={columns}
            data={goalsData}
            searchableKeys={[
               "typeOfGoal",
               "title",
               "startDate",
               "endDate",
               "totalRating",
               "progress",
            ]}
         />
      </div>
   );
};
export default TrackGoals;
