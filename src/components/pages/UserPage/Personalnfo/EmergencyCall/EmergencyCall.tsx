// PersonalInfoForm.tsx
import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";

const EmergencyCall = ({ queryData }: { queryData: any }) => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      fullName: queryData?.emergencyName == null ? "" : queryData?.emergencyName,
      phoneNumber: queryData?.emergencyPhone == null ? "" : queryData?.emergencyPhone,

    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <Form formProp={form} onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
      <Form.Input
        label="نام کامل"
        name="fullName"
        placeholder="نام کامل"
        required
      />
      <Form.Input
        label="شماره تماس"
        name="phoneNumber"
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
