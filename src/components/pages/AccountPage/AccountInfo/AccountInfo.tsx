import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { validation } from "./validation";
import { TbLockPassword } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { usePostRows } from "@/hook/usePostRows";

const AccountInfo = ({ queryData }: { queryData: any }) => {
  const defaultValues = {
    amount: queryData?.amount == null ? "" : queryData?.amount,
  };

  const { id } = useParams() as { id: string };

  const { mutation, form } = usePostRows(
    `employeeSalary/upsert/${id}`,
    ["employeesDetailse", id],
    defaultValues,
    validation,
    " حساب کاربری  ",
    false
  );

  const onSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3">
        <TbLockPassword className="w-7 h-7" />
        <span> اطلاعات حساب کاربری </span>
      </div>
      <div className="p-3">
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 relative"
        >
          {mutation.isPending && (
            <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="mr-2">در حال ارسال اطلاعات...</span>
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-5">
            <Form.Input
              name="amount"
              label="دستمزد ماهانه"
              placeholder="دستمزد ماهانه"
              required
            />
          </div>

          <div>
            <Button type="submit" className="mt-4">
              ذخیره
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountInfo;
