import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { validation } from "./validation";
import { TecherInfoColumns } from "./column";
import SectionAcc from "@/components/shared/section/SectionAcc";
import { usePostRows } from "@/hook/usePostRows";
import { useGetRowsToTable } from "@/hook/useGetRows";

export default function TecherInfo() {
  const defaultValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    specialty: "",
    address: "",
  };
  const formFields = (
    <>
      <div className="gap-[2.5rem]  flex justify-between items-start! flex-col md:flex-row w-full!">
        <div className="flex  gap-[5px] flex-col md:w-[50%] w-full!">
          <div className="w-[100%] flex gap-[2.5rem] justify-between flex-col md:flex-row">
            <Form.Input
              label=" نام  "
              name="first_name"
              placeholder=" مشخصات مدرس "
              required
              className="w-[100%]"
            />
            <Form.Input
              label="نام خانوادگی"
              name="last_name"
              placeholder=" مشخصات مدرس "
              required
              className="w-[100%]"
            />
          </div>
          <div className="w-[100%] flex gap-[2.5rem] justify-between flex-col md:flex-row">
            <Form.Input
              label="شماره تماس "
              name="phone"
              placeholder=" مشخصات مدرس "
              required
              className="w-[100%]"
            />
            <Form.Input
              label="ایمیل "
              name="email"
              placeholder=" مشخصات مدرس "
              required
              className="w-[100%]"
            />
          </div>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <Form.Textarea
            label="تخصص "
            name="specialty"
            placeholder=" مشخصات مدرس "
            required
            textareaClassName="min-h-[130px]!"
            className="min-h-[50px]!"
          />
        </div>
      </div>
      <div>
        <Form.Textarea
          label="نشانی"
          name="address"
          placeholder=" مشخصات مدرس "
          required
          className="max-w-full!"
        />
      </div>
    </>
  );

  const { mutation, form } = usePostRows(
    "teachers",
    ["teachers"],
    defaultValues,
    validation,
    "مدرس ها",
    true
  );
  const fetchTeachers = () => useGetRowsToTable("teachers");


  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data)
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <SectionAcc
          form={form}
          schema={validation}
          defaultValues={defaultValues}
          formFields={formFields}
          onSubmit={onSubmit}
          FirstTitle="ثبت جدید مشخصات مدرس"
          SecoundTitle="لیست همه مشخصات مدرس"
          table={
            <DataTable
              columns={TecherInfoColumns}
              queryKey={["teachers"]}
              queryFn={fetchTeachers}
              searchableKeys={["name", "lname", "skills"]}
            />
          }
        />
      </div>
    </div>
  );
}
