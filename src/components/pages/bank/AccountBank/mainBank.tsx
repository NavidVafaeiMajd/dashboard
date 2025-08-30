import { useBankColumns } from "./columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "./const";
import { z } from "zod";
import { Form } from "@/components/shared/Form";
import SectionCol from "@/components/shared/section/SectionCol";
const validation = z.object({
  accountType: z.string().min(1, "نوع حساب الزامی است"),
  initialBalance: z.string().min(1, "تراز اولیه الزامی است"),
  accountNumber: z.string().min(1, "شماره حساب الزامی است"),
  branchCode: z.string().min(1, "کد شعبه الزامی است"),
  branchName: z.string().min(1, "نام شعبه الزامی است"),
});

export default function MainBank() {
  const defaultValues = {
    accountType: "",
    initialBalance: "",
    accountNumber: "",
    branchCode: "",
    branchName: "",
  };

  const formFields = (
    <>
      <Form.Input
        label="نوع حساب بانکی"
        name="accountType"
        placeholder="مثلاً سپرده"
        required
      />
      <Form.Input
        label="تراز اولیه"
        name="initialBalance"
        placeholder="تراز اولیه"
        required
      />
      <Form.Input
        label="شماره حساب بانکی"
        name="accountNumber"
        placeholder="شماره حساب"
        required
      />
      <Form.Input
        label="کد شعبه"
        name="branchCode"
        placeholder="کد شعبه"
        required
      />
      <Form.Input
        label="شعبه بانک"
        name="branchName"
        placeholder="نام شعبه"
        required
      />
    </>
  );

  const { columns } = useBankColumns();

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("✅ Form Data:", data);
  };

  return (
    <div>
      <SectionCol
        defaultValues={defaultValues}
        schema={validation}
        formFields={formFields}
        onSubmit={onSubmit}
        table={
          <DataTable
            columns={columns}
            data={BANK_ACCOUNTS}
            searchableKeys={["accountNumber", "accountType"]}
          />
        }
        FirstTitle="ثبت جدید حساب"
        SecoundTitle="لیست همه حساب ها"
      />
    </div>
  );
}
