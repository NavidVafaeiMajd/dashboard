// Biography.tsx
import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { validation } from "./validation";
import { Button } from "@/components/ui/button";
import type z from "zod";

const Biography = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      biography: "",
      workExperience: "",
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
      <Form.Textarea
        label="بیوگرافی"
        name="biography"
        placeholder="بیوگرافی پرسنل را اینجا وارد کنید.."
        required
      />
      <Form.Select
        label="سابقه کار"
        name="workExperience"
        placeholder="انتخاب سابقه کار"
        required
      >
        <Form.SelectItem value="1-3">1-3 سال</Form.SelectItem>
        <Form.SelectItem value="3-5">3-5 سال</Form.SelectItem>
        <Form.SelectItem value="5+">بیش از 5 سال</Form.SelectItem>
      </Form.Select>
      <div>
        <Button type="submit" className="mt-4">
          ذخیره
        </Button>
      </div>
    </Form>
  );
};

export default Biography;
