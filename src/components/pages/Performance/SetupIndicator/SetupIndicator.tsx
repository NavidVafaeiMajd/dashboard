import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./column";
import { setupIndicatorData } from "./const";
import SectionCol from "@/components/shared/section/SectionCol";

const SetupIndicator = () => {
  const OnSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  const defaultValues = {
    sorting: "",
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col gap-y-5 bg-white shadow-xs py-4">
        <div className="border-b border-b-red-500 p-4">
          <h2 className="text-xl">تنظیم اندیکاتور</h2>
        </div>
        <div className="flex gap-x-4 px-4">
          <Button className="px-4 py-6 text-lg">صلاحیت های فنی</Button>
          <Button className="px-4 py-6 text-lg">رفتار سازمانی</Button>
        </div>
      </div>
      <div>
        <SectionCol
          defaultValues={defaultValues}
          schema={validation}
          formFields={
            <>
              <Form.Input
                name="sorting"
                label="دسته بندی"
                placeholder="دسته بندی"
                required
              />
            </>
          }
          onSubmit={OnSubmit}
          FirstTitle="ثبت جدید دسته بندی سازمانی"
          SecoundTitle="لیست همه دسته بندی ها"
          table={
            <DataTable
              columns={columns}
              data={setupIndicatorData}
              searchableKeys={["sorting"]}
            />
          }
        />
      </div>
    </div>
  );
};
export default SetupIndicator;
