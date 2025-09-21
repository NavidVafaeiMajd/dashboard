// components/shared/DynamicPage.tsx
import { type FieldValues, type UseFormReturn } from "react-hook-form";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import z from "zod";

interface SectionColProps<T extends z.ZodTypeAny> {
  form: UseFormReturn<z.infer<T> & FieldValues>;
  schema: T;
  defaultValues: z.infer<T>;
  formFields: React.ReactNode;
  onSubmit: (data: z.infer<T>) => void;
  table?: React.ReactNode;
  FirstTitle?: string;
  SecoundTitle?: string;
}

const SectionCol = <T extends z.ZodTypeAny<any, any, any>>({
  form,

  formFields,
  onSubmit,
  table,
  FirstTitle = "فرم",
  SecoundTitle = "فرم",
}: SectionColProps<T>) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-start">
      <div className="md:col-span-2 bg-bgBack rounded-sm shadow">
        <div className="border-b-red-500 border-b-2 p-5">{FirstTitle}</div>
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#F9F9FB] p-5"
        >
          {formFields}

          <div className="flex gap-x-2 mt-5">
            <Button type="submit">ثبت</Button>
          </div>
        </Form>
      </div>
      <div className="md:col-span-4  bg-bgBack rounded-sm shadow overflow-x-auto!">
        <div className="border-b-red-500 border-b-2 p-5">{SecoundTitle}</div>
        {table && <div className="mt-5 bg-[#F9F9FB]">{table}</div>}
      </div>
    </div>
  );
};

export default SectionCol;
