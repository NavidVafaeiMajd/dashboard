import { useEffect } from "react";
import Table from "./Table";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import { usePostRows } from "@/hook/usePostRows";
import { FaSquarePlus } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import Breadcrumb from "@/components/shared/breadcrumb";
import Smartwizard from "@/components/shared/Smartwizard";
import SectionCol from "@/components/shared/section/SectionCol";

const ExitType = () => {
  const title = "نوع انفصال";
  useEffect(() => {
    document.title = title;
  }, []);

  const defaultValues = {
    name: "",
  };

  const { mutation, form } = usePostRows(
    "separation-types",
    ["separation-types"],
    defaultValues,
    validation,
    "نوع انفصال",
    true
  );

  const formFields = (
    <div className="relative">
      {mutation.isPending && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال ارسال اطلاعات...</span>
        </div>
      )}
      
      <div className="flex flex-col gap-5">
        <Form.Input
          name="name"
          label="نوع انفصال"
          placeholder="نام نوع انفصال را وارد کنید"
          required
        />
      </div>
    </div>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("Form data:", data);
    mutation.mutate(data);
  };

  return (
    <>
      <Breadcrumb>{title}</Breadcrumb>
      <div className="">
        <div className="">
          <div>
            <Smartwizard
              data={[
                [
                  <>
                    <IoMdExit className="w-7 h-7" />
                  </>,
                  "/staff/employ-exit",
                  "انفصال از خدمت",
                  "تنظیمات انفصال از خدمت",
                ],
                [
                  <>
                    <FaSquarePlus className="w-7 h-7" />
                  </>,
                  "/exit-type",
                  "نوع انفصال",
                  "تنظیمات نوع انفصال",
                ],
              ]}
            />
          </div>
        </div>
        <SectionCol
          form={form}
          formFields={formFields}
          onSubmit={onSubmit}
          table={<Table />}
          FirstTitle="ثبت جدید نوع انفصال"
          SecoundTitle="لیست همه انواع انفصال"
          defaultValues={defaultValues}
          schema={validation}
        />
      </div>
    </>
  );
};

export default ExitType;