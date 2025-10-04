import { useEffect } from "react";
import Table from "./Table";
import { Form } from "@/components/shared/Form";
import z from "zod";
import { validation } from "./validation";
import { usePostRows } from "@/hook/usePostRows";
import SectionAcc from "@/components/shared/section/SectionAcc";
import PostLoad from "@/components/ui/postLoad";

const MarketingStaff: React.FC = () => {
  const title = "پرسنل بازاریابی";
  useEffect(() => {
    document.title = title;
  }, []);

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
  };


  const { mutation, form } = usePostRows(
    "marketing-staff",
    ["marketing-staff"],
    defaultValues,
    validation,
    "پرسنل بازاریابی",
    true
  );

  const formFields = (
    <div className="relative">
      {mutation.isPending && <PostLoad/>}
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input name="first_name" label="نام" required placeholder="نام" />
        <Form.Input
          name="last_name"
          label="نام خانوادگی"
          required
          placeholder="نام خانوادگی"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          name="email"
          label="ایمیل"
          placeholder="ایمیل"
          required
        />
        <Form.Input
          name="phone"
          label="شماره تلفن"
          placeholder="شماره تلفن"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          name="address"
          label="آدرس"
          placeholder="آدرس (اختیاری)"
        />
      </div>
    </div>
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <>
      <SectionAcc
        form={form}
        formFields={formFields}
        onSubmit={onSubmit}
        table={<Table />}
        FirstTitle="ثبت جدید پرسنل بازاریابی"
        SecoundTitle="لیست همه پرسنل بازاریابی"
        schema={validation}
        defaultValues={defaultValues}
      />
    </>
  );
};

export default MarketingStaff;
