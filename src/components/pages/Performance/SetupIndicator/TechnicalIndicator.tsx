import { Form } from "@/components/shared/Form";
import type z from "zod";
import { validation } from "./validation";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./Technical/column";
import SectionCol from "@/components/shared/section/SectionCol";
import { Button } from "@/components/ui/button";
import {  useNavigate } from "react-router-dom";
import { useGetRowsToTable } from "@/hook/useGetRows";
import { usePostRows } from "@/hook/usePostRows";


const defaultValues = {
  name: "",
};

const TechnicalIndicator = () => {
  const navigate = useNavigate();

  const { mutation, form } = usePostRows(
    "indicators",
    ["indicators/technical"],
    defaultValues,
    validation,
    "صلاحیت فنی",
    true
  );

  const fetchIndicators = () => useGetRowsToTable("indicators/technical");

  const OnSubmit = (data: z.infer<typeof validation>) => {
    const formData = {
      ...data, 
      type: "صلاحیت های فنی",
    }

    console.log(formData);

    mutation.mutate(formData)
  };



  return (
      <div className="space-y-4 w-full">
                <div className="flex flex-col gap-y-5 bg-white shadow-xs py-4">
        <div className="border-b border-b-red-500 p-4">
          <h2 className="text-xl">صلاحیت های فنی</h2>
        </div>
        <div className="flex gap-x-4 px-4">
          <Button className="px-4 py-6 text-lg" onClick={() => navigate("/performance/setup-indicator")}>صلاحیت های فنی</Button>
          <Button className="px-4 py-6 text-lg" onClick={() => navigate("/performance/behavioral")}>رفتار سازمانی</Button>
        </div>
      </div>

      <div>
        <SectionCol
          form={form}
          defaultValues={defaultValues}
          schema={validation}
          formFields={
            <>
              <Form.Hidden name="type" value="صلاحیت های فنی"/>
              <Form.Input
                name="name"
                label="صلاحیت فنی"
                placeholder="صلاحیت فنی"
                required
              />
            </>
          }
          onSubmit={OnSubmit}
          FirstTitle="ثبت جدید صلاحیت فنی"
          SecoundTitle="لیست صلاحیت های فنی"
          table={
            <DataTable
              columns={columns}
              queryKey={["indicators/technical"]}
              queryFn={fetchIndicators}
              searchableKeys={["sorting"]}
            />
          }
        />
      </div>
    </div>
  );
};

export default TechnicalIndicator;


