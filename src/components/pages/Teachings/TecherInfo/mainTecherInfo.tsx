import { DataTable } from "@/components/shared/data-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { validation } from "./validation";
import { TecherInfoColumns } from "./column";
import { TecherInfo as TecherInfoData } from "./const";
import SectionAcc from "@/components/shared/section/SectionAcc";

export default function TecherInfo() {
  const defaultValues = {
    name: "",
    lname: "",
    phone: "",
    email: "",
    skills: "",
    location: "",
  };
  const formFields = (
    <>
      <div className="gap-[2.5rem]  flex justify-between items-start! flex-col md:flex-row w-full!">
        <div className="flex  gap-[5px] flex-col md:w-[50%] w-full!">
          <div className="w-[100%] flex gap-[2.5rem] justify-between flex-col md:flex-row">
            <Form.Input
              label=" نام  "
              name="name"
              placeholder=" مشخصات مدرس "
              required
              className="w-[100%]"
            />
            <Form.Input
              label="نام خانوادگی"
              name="lname"
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
            name="skills"
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
          name="location"
          placeholder=" مشخصات مدرس "
          required className="max-w-full!"
        />
      </div>
    </>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };
  return (
    <div>
          <div className="overflow-x-auto">
          <SectionAcc
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        FirstTitle="ثبت جدید مشخصات مدرس"
        SecoundTitle="لیست همه مشخصات مدرس"
        table={
          <DataTable
            columns={TecherInfoColumns} 
            data={TecherInfoData}
            searchableKeys={["name", "lname", "skills"]}
            
          />
        }
      />
          </div>

    </div>
  );
}
