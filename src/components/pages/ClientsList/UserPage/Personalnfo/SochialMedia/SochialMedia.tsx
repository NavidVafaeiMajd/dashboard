import { Form } from "@/components/shared/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";


const SocialMedia = () => {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      instagram: "",
      twitter: "",
      linkedin: "",
      facebook: "",
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
      <Form.Input
        label="اینستاگرام"
        name="instagram"
        placeholder="لینک اینستاگرام"
        required
      />
      <Form.Input
        label="توییتر"
        name="twitter"
        placeholder="لینک توییتر"
        required
      />
      <Form.Input
        label="لینکدین"
        name="linkedin"
        placeholder="لینک لینکدین"
        required
      />
      <Form.Input
        label="فیسبوک"
        name="facebook"
        placeholder="لینک فیسبوک"
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

export default SocialMedia;
