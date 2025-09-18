// BankAccountForm.tsx
import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";

const BankAccountForm = ({ queryData }: { queryData: any }) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      accountType: queryData?.accountType == null ? "" : queryData?.accountType,
      accountNumber: queryData?.accountNumber == null ? "" : queryData?.accountNumber,
      bankName: queryData?.bankName == null ? "" : queryData?.bankName,
      cardNumber: queryData?.cardNumber == null ? "" : queryData?.cardNumber,
      shebaNumber: queryData?.sheba == null ? "" : queryData?.sheba,
      branchName: queryData?.branch == null ? "" : queryData?.branch,
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <Form
      formProp={form}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 w-full"
    >
      <div className="flex gap-5">
        <Form.Input
          label="نوع حساب بانکی"
          name="accountType"
          placeholder="مثلاً سپرده"
          required
        />
        <Form.Input
          label="شماره حساب بانکی"
          name="accountNumber"
          placeholder="شماره حساب"
          required
        />
      </div>
      <div className="flex gap-5">
        <Form.Input
          label="نام بانک"
          name="bankName"
          placeholder="نام بانک"
          required
        />
        <Form.Input
          label="شماره کارت بانک"
          name="cardNumber"
          placeholder="شماره کارت"
          required
        />
      </div>

      <div className="flex gap-5">
        <Form.Input
          label="شماره شبا"
          name="shebaNumber"
          placeholder="شماره شبا"
          required
        />
        <Form.Input
          label="شعبه بانک"
          name="branchName"
          placeholder="نام شعبه"
          required
        />
      </div>

      <div>
        <Button type="submit" className="mt-4">
          ذخیره
        </Button>
      </div>
    </Form>
  );
};

export default BankAccountForm;
