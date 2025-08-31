import { DataTable } from "@/components/shared/data-table";
import { z } from "zod";
import SectionAccImg from "@/components/shared/section/SectionAccImg";
import { validation } from "./validation";
import { columns } from "./columns";
import { Form } from "@/components/shared/Form";
import { DEPOSIT_LIST } from "./const";

export default function MainList() {
  const defaultValues = {
    accountType: "",
    amount: "",
    date: new Date(),
    category: "",
    receiver: "",
    paymentMethod: "",
    reference: "",
    description: "",
    organizationUnit: "",
    name: "",
  };

  const formFields = (
    <>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          name="accountType"
          label="نوع حساب بانکی"
          placeholder="مثال: جاری"
          required
        />
        <Form.Input
          name="amount"
          label="مقدار"
          placeholder="مقدار را وارد کنید"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Form.Date name="date" label="تاریخ" />
        <Form.Select
          name="category"
          label="دسته بندی"
          placeholder="مثال: حقوق، هزینه اداری"
          required
        >
          <Form.SelectItem value="حقوق">حقوق</Form.SelectItem>
          <Form.SelectItem value="هزینه اداری">هزینه اداری</Form.SelectItem>
        </Form.Select>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Form.Input
          name="receiver"
          label="دریافت کننده وجه"
          placeholder="نام یا شرکت دریافت‌کننده"
        />
        <Form.Select
          name="paymentMethod"
          label="روش پرداخت"
          placeholder="انتخاب روش پرداخت"
        >
          <Form.SelectItem value="کارت به کارت">کارت به کارت</Form.SelectItem>
          <Form.SelectItem value="حواله بانکی">حواله بانکی</Form.SelectItem>
          <Form.SelectItem value="پرداخت نقدی">پرداخت نقدی</Form.SelectItem>
        </Form.Select>
        <Form.Input
          name="reference"
          label="مرجع#"
          placeholder="مثال: شناسه معامله، شماره چک"
        />
      </div>

      <Form.Textarea
        name="description"
        label="شرح"
        placeholder="توضیحات اضافه..."
      />
    </>
  );

  function onSubmit(values: z.infer<typeof validation>) {
    console.log(values);
  }

  return (
    <div>
      <SectionAccImg
        file={
          <>
            <Form.Image name="image" label="تصویر پروفایل" />
          </>
        }
        FileTitle="تصویر پروفایل"
        schema={validation}
        defaultValues={defaultValues}
        formFields={formFields}
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            data={DEPOSIT_LIST}
            searchableKeys={[
              "accountType",
              "receiver",
              "category",
              "reference",
            ]}
          />
        }
        FirstTitle="ثبت جدید هزینه ها"
        SecoundTitle="لیست همه هزینه ها"
      />
    </div>
  );
}
