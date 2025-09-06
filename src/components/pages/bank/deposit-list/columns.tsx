import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import ActionsCell from "@/components/shared/ActionsCell";
import type { ColumnDef } from "@tanstack/react-table";
import { Form } from "@/components/shared/Form";
import { z } from "zod";

export interface DepositList {
  id: string;
  accountType: string;     // نوع حساب بانکی
  receiver: string;        // دریافت کننده وجه
  amount: number;          // مقدار
  category: string;        // دسته بندی
  reference: string;       // مرجع#
  paymentMethod: string;   // روش پرداخت
  date:  Date;            // تاریخ
  [key: string]: string | number | Date;
}

export const validation = z.object({
  accountType: z.string().nonempty("نوع حساب بانکی الزامی است"),
  amount: z.string().nonempty("مقدار الزامی است"),
  date: z.date({ error: "تاریخ الزامی است" }),
  category: z.string().nonempty("دسته بندی الزامی است"),
  receiver: z.string().nonempty("دریافت کننده وجه الزامی است"),
  paymentMethod: z.string().nonempty("روش پرداخت الزامی است"),
  reference: z.string().optional(),
  description: z.string().optional(),
});

export const defaultValues = {
  accountType: "",
  amount: "",
  date: new Date(),
  category: "",
  receiver: "",
  paymentMethod: "",
  reference: "",
  description: "",
};

export const columns: ColumnDef<DepositList>[] = [
  {
    accessorKey: "accountType",
    header: "نوع حساب بانکی",
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("accountType")}</div>
    ),
  },
  {
    accessorKey: "receiver",
    header: "دریافت کننده وجه",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("receiver")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "مقدار",
    cell: ({ row }) => (
      <div className="text-center">
        {Number(row.getValue("amount")).toLocaleString()} ریال
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "دسته بندی",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "reference",
    header: "مرجع#",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("reference")}</div>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "روش پرداخت",
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("paymentMethod")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "تاریخ",
    cell: ({ row }) => {
      const date: Date = row.getValue("date");
      return (
        <div className="text-center">
          {new Intl.DateTimeFormat("fa-IR").format(new Date(date))}
        </div>
      );
    },
  },  
  {
    id: "actions",
    header: "عملیات",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
<div className="flex items-center gap-2">
  <EditDialog
    onSave={() => {}}
    fields={
      <>
        <Form.Select name="bankAccountType" label="نوع حساب بانکی " required >
          <Form.SelectItem value="1">حساب جاری</Form.SelectItem>
          <Form.SelectItem value="2">حساب پس انداز</Form.SelectItem>
        </Form.Select>
        <Form.Input name="amount" label="مقدار " required />
        <Form.Date name="date" label="تاریخ "  />
        <Form.Select name="category" label="دسته بندی " required >
          <Form.SelectItem value="1">دسته بندی 1</Form.SelectItem>
          <Form.SelectItem value="2">دسته بندی 2</Form.SelectItem>
        </Form.Select>
        <Form.Select name="recipient" label="دریافت کننده وجه " required >
          <Form.SelectItem value="1">دریافت کننده وجه 1</Form.SelectItem>
          <Form.SelectItem value="2">دریافت کننده وجه 2</Form.SelectItem>
        </Form.Select>
        <Form.Select name="paymentMethod" label="روش پرداخت " required >
          <Form.SelectItem value="1">روش پرداخت 1</Form.SelectItem>
          <Form.SelectItem value="2">روش پرداخت 2</Form.SelectItem>
        </Form.Select>
        <Form.Input name="reference" label="مرجع #" />
        <Form.Image name="attachment" label="پیوست هزینه "  />
        <Form.Textarea name="description" label="شرح" />
      </>
    }
    defaultValues={defaultValues}
    schema={validation}
  />
  <DeleteDialog onConfirm={() => {}} />
  <ActionsCell
    actions={[
      {
        label: "نمایش جزییات",
        path: `/bank/deposit-list-details/${rowData.id}`,
      },
    ]}
  />
</div>

      );
    },
  },
];
