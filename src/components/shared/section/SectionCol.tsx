// components/shared/DynamicPage.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/shared/Form";
import { Button } from "@/components/ui/button";
import z from "zod";

interface SectionColProps<T extends z.ZodTypeAny> {
  schema: T;
  defaultValues: z.infer<T>;
  formFields: React.ReactNode;   
  onSubmit: (data: z.infer<T>) => void;
  table?: React.ReactNode;      
  stats?: React.ReactNode;     
  accordionTitle?: string;
}

const SectionCol = <T extends z.ZodTypeAny<any, any, any>>({
  schema,
  defaultValues,
  formFields,
  onSubmit,
  table,
  stats,
  accordionTitle = "فرم",
}: SectionColProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver((schema as any)),
    defaultValues,
  });

  return (
    <div className="bg-white my-5 rounded-sm p-5">
      {/* کارت‌های آماری */}
      {stats && <div className="mb-5">{stats}</div>}

      {/* فرم */}
      <Form
        formProp={form}
        accordion
        accordionTitle={accordionTitle}
        onSubmit={onSubmit}
        className="flex flex-col gap-5"
      >
        {formFields}

        <div className="flex gap-x-2 mt-5">
          <Button type="submit">ثبت</Button>
        </div>
      </Form>

      {/* جدول */}
      {table && <div className="mt-5">{table}</div>}
    </div>
  );
};

export default SectionCol;
