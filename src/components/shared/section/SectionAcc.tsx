// components/shared/DynamicPage.tsx
import {  type FieldValues, type UseFormReturn } from "react-hook-form";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface SectionAccProps<T extends z.ZodTypeAny> {
    form: UseFormReturn<z.infer<T> & FieldValues>;
  schema: T;
  defaultValues: z.infer<T>;
  formFields: React.ReactNode;
  onSubmit: (data: z.infer<T>) => void;
  table?: React.ReactNode;
  FirstTitle?: string;
  SecoundTitle?: string;

}

const SectionAcc = <T extends z.ZodTypeAny<any, any, any>>({
  form,
  formFields,
  onSubmit,
  table,
  FirstTitle = "فرم",
  SecoundTitle = "فرم",
}: SectionAccProps<T>) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-5">
      <div className={` bg-bgBack rounded-sm shadow ${isOpen? "shadow" :'hidden'}`}>
        <div className="border-b-red-500 border-b-2  px-5 py-3 flex justify-between items-center">
          <span>{FirstTitle}</span>

          <span>
            <Button onClick={() => setIsOpen((prev) => !prev)}>  <FaMinus className="w-7 h-7"/> مخفی </Button>
          </span>
        </div>
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#F9F9FB] p-5"
        >
          {formFields}

          <div className="flex gap-x-2 mt-5">
            <Button type="submit">ثبت </Button>
          </div>
        </Form>
      </div>
      <div className="  bg-bgBack rounded-sm shadow overflow-x-auto!">
        <div className="border-b-red-500 border-b-2 px-5 py-3 flex justify-between items-center">
          <span>{SecoundTitle}</span>

          <span>
            <Button onClick={() => setIsOpen((prev) => !prev)}> <FaPlus className="w-7 h-7" /> ثبت جدید </Button>
          </span>
        </div>
        {table && <div className="mt-5 bg-[#F9F9FB]">{table}</div>}
      </div>
    </div>
  );
};

export default SectionAcc;
