// PersonalInfoForm.tsx
import { Form } from "@/components/shared/Form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";
import { useParams } from "react-router-dom";
import { usePostRows } from "@/hook/usePostRows";

const EmergencyCall = ({ queryData }: { queryData: any }) => {

  const defaultValues = {
    emergencyName: queryData?.emergencyName == null ? "" : queryData?.emergencyName,
    emergencyPhone: queryData?.emergencyPhone == null ? "" : queryData?.emergencyPhone,
  };
  const {id} = useParams() as {id: string}

  const { mutation, form } = usePostRows(`employeeEmergencyContact/upsert/${id}`, ["employeesDetailse", id] , defaultValues, validation  , "تماس اضطراری  ",false);

  const onSubmit = (data: z.infer<typeof validation>) => {
    mutation.mutate(data);
  };
  return (
    <Form formProp={form} onSubmit={onSubmit} className="flex flex-col gap-5 w-full relative">
            {mutation.isPending && (
        <div className="flex justify-center items-center absolute p-4 top-0 left-0 right-0 bottom-0 bg-bgBack/90 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="mr-2">در حال ارسال اطلاعات...</span>
        </div>
      )}
      <Form.Input
        label="نام کامل"
        name="emergencyName"
        placeholder="نام کامل"
        required
      />
      <Form.Input
        label="شماره تماس"
        name="emergencyPhone"
        placeholder="شماره تماس"
        required
      />
      <div>
        <Button type="submit" className="mt-4">
          ذخیره
        </Button>
      </div>
    </Form>
  );
};

export default EmergencyCall;
