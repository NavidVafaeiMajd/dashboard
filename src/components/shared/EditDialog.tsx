import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./Form";

interface EditDialogProps<T extends z.ZodTypeAny> {
  title?: string;
  triggerLabel?: string;
  fields: React.ReactNode;
  defaultValues: z.infer<T>;
  onSave: (data: z.infer<T>) => void;
  schema: T;
  btnTitle?: string;
  variant?: "outline" | "default";
}

export function EditDialog<T extends z.ZodTypeAny<any, any, any>>({
  title = "ویرایش اطلاعات",
  triggerLabel = "ویرایش",
  fields,
  defaultValues,
  onSave,
  schema,
  btnTitle = "ذخیره",
  variant ="outline"
}: EditDialogProps<T>) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema as any),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    onSave(values);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}  >
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size="sm"
          onClick={() => form.reset(defaultValues)}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="z-100 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            لطفا اطلاعات مورد نظر را ویرایش کنید.
          </DialogDescription>
        </DialogHeader>

        <Form
          formProp={form}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 bg-[#F9F9FB] p-5"
        >
          {fields}
          <DialogFooter>
            <Button type="submit">{btnTitle}</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
