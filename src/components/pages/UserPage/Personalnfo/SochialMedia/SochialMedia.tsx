import { Form } from "@/components/shared/Form";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";
import { useParams } from "react-router-dom";
import { usePostRows } from "@/hook/usePostRows";

const SocialMedia = ({ queryData }: { queryData: any }) => {

  const defaultValues = {
    instagram: queryData?.instagram == null ? "" : queryData?.instagram,
    twitter: queryData?.twitter == null ? "" : queryData?.twitter,
    linkedin: queryData?.linkedin == null ? "" : queryData?.linkedin,
    facebook: queryData?.facebook == null ? "" : queryData?.facebook,
    email: queryData?.email == null ? "" : queryData?.email,
  }

  const {id} = useParams() as {id: string}


  const { mutation, form } = usePostRows(`employeeSocialProfile/upsert/${id}`, ["employeesDetailse", id] , defaultValues, validation  , " شبکه های اجتماعی ",false);

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
      <Form.Input
        label="حساب ایمیل "
        name="email"
        placeholder="حساب ایمیل "
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
