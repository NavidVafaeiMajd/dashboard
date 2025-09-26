// Biography.tsx
import { Form } from "@/components/shared/Form";
import { validation } from "./validation";
import { Button } from "@/components/ui/button";
import type z from "zod";
import { usePostRows } from "@/hook/usePostRows";
import { useParams } from "react-router-dom";

const Biography = ({ queryData }: { queryData: any }) => {
  const defaultValues = {
    bio: queryData?.bio == null ? "" : queryData?.bio,
    workExperience: queryData?.workExperience == null ? "" : queryData?.workExperience,
  };

  const {id} = useParams() as {id: string}


  const { mutation, form } = usePostRows(`employeeBiography/upsert/${id}`, ["employeesDetailse", id] , defaultValues, validation  , "بیوگرافی",false);

  const onSubmit = (data: z.infer<typeof validation>) => {
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
      <Form.Textarea
        label="بیوگرافی"
        name="bio"
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
