// BankAccountForm.tsx
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";
import { useParams } from "react-router-dom";
import { usePostRows } from "@/hook/usePostRows";

const BankAccountForm = ({ queryData }: { queryData: any }) => {

  const defaultValues = {
    accountType: queryData?.accountType == null ? "" : queryData?.accountType,
    accountNumber: queryData?.accountNumber == null ? "" : queryData?.accountNumber,
    bankName: queryData?.bankName == null ? "" : queryData?.bankName,
    cardNumber: queryData?.cardNumber == null ? "" : queryData?.cardNumber,
    sheba: queryData?.sheba == null ? "" : queryData?.sheba,
    branch: queryData?.branch == null ? "" : queryData?.branch,
  };

  const {id} = useParams() as {id: string}


  const { mutation, form } = usePostRows(`employeeBankAccount/upsert/${id}`, ["employeesDetailse", id] , defaultValues, validation  , "حساب بانکی",false);

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <Form
      formProp={form}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 w-full relative"
    >
            {mutation.isPending && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال ارسال اطلاعات...</span>
        </div>
      )}
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
          name="sheba"
          placeholder="شماره شبا"
          required
        />
        <Form.Input
          label="شعبه بانک"
          name="branch"
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
