// components/shared/DynamicPage.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import z, { file } from "zod";
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

interface SectionAccProps<T extends z.ZodTypeAny> {
  schema: T;
  defaultValues: z.infer<T>;
  formFields: React.ReactNode;
  file: React.ReactNode;
  onSubmit: (data: z.infer<T>) => void;
  table?: React.ReactNode;
  FirstTitle?: string;
  SecoundTitle?: string;
  FileTitle?: string;
}

const SectionAcc = <T extends z.ZodTypeAny<any, any, any>>({
  schema,
  defaultValues,
  formFields,
  onSubmit,
  file,
  FileTitle,
  table,
  FirstTitle = "فرم",
  SecoundTitle = "فرم",
}: SectionAccProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-5">
      <div>
        <Form
          formProp={form}
          onSubmit={onSubmit}
          className={` ${isOpen ? "shadow" : "hidden"}`}
        >
          <div className=" bg-bgBack rounded-sm shadow">
            <div className="border-b-red-500 border-b-2  px-5 py-3 flex justify-between items-center">
              <span>{FirstTitle}</span>
              <span>
                <Button onClick={() => setIsOpen((prev) => !prev)}>
                  {" "}
                  <FaMinus className="w-7 h-7" /> مخفی{" "}
                </Button>
              </span>
            </div>
            {formFields}

            <div className="flex gap-x-2 mt-5">
              <Button type="submit">ثبت </Button>
            </div>
          </div>
          <div className=" bg-bgBack rounded-sm shadow">
            <div className="border-b-red-500 border-b-2  px-5 py-3 flex justify-between items-center">
              <span>{FileTitle}</span>
            </div>
            {file}
          </div>
        </Form>
      </div>
      <div className="  bg-bgBack rounded-sm shadow">
        <div className="border-b-red-500 border-b-2 px-5 py-3 flex justify-between items-center">
          <span>{SecoundTitle}</span>

          <span>
            <Button onClick={() => setIsOpen((prev) => !prev)}>
              {" "}
              <FaPlus className="w-7 h-7" /> ثبت جدید{" "}
            </Button>
          </span>
        </div>
        {table && <div className="mt-5 bg-[#F9F9FB]">{table}</div>}
      </div>
    </div>
  );
};

export default SectionAcc;
