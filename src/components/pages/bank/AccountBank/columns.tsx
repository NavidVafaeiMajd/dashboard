import { useState } from "react";
import { Modal } from "./Modal";
import type { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import z from "zod";
import { Form } from "@/components/shared/Form";

export interface BankAccount {
  id: string;
  accountType: string;
  accountNumber: string;
  difference: number;
  branchName: string;
  [key: string]: string | number;
}

const validation = z.object({
  accountType: z.string().min(1, "نوع حساب الزامی است"),
  initialBalance: z.string().min(1, "تراز اولیه الزامی است"),
  accountNumber: z.string().min(1, "شماره حساب الزامی است"),
  branchCode: z.string().min(1, "کد شعبه الزامی است"),
  branchName: z.string().min(1, "نام شعبه الزامی است"),
});

const defaultValues = {
  accountType: "",
  initialBalance: "",
  accountNumber: "",
  branchCode: "",
  branchName: "",
};

export const useBankColumns = () => {
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(
    null
  );

  const columns: ColumnDef<BankAccount>[] = [
    {
      accessorKey: "accountType",
      header: "نوع حساب بانکی",
      cell: ({ row }) => (
        <div className="text-right">{row.getValue("accountType")}</div>
      ),
    },
    {
      accessorKey: "accountNumber",
      header: "شماره حساب بانکی",
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("accountNumber")}</div>
      ),
    },
    {
      accessorKey: "difference",
      header: "ما به التفاوت",
      cell: ({ row }) => (
        <div className="text-center">
          {Number(row.getValue("difference")).toLocaleString()} ریال
        </div>
      ),
    },
    {
      accessorKey: "branchName",
      header: "شعبه بانک",
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("branchName")}</div>
      ),
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
                  <Form.Input name="accountType" label="نوع حساب" required />
                  <Form.Input name="initialBalance" label=" تراز اولیه " required />
                  <Form.Input name="accountNumber" label=" شماره حساب " required />
                  <Form.Input name="branchCode" label=" کد شعبه " required />
                  <Form.Input name="branchName" label=" نام شعبه " required />
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
                  path: `/bank/accounts-list-details/${rowData.id}`,
                },
              ]}
            />
          </div>
        );
      },
    },
  ];

  // خروجی: ستون‌ها + مودال
  return {
    columns,
    modal: selectedAccount && (
      <Modal
        isOpen={true}
        onClose={() => setSelectedAccount(null)}
        title="ویرایش حساب"
      >
        <div className="space-y-2 text-sm leading-relaxed">
          <p>
            <strong>نوع حساب:</strong> {selectedAccount.accountType}
          </p>
          <p>
            <strong>شماره حساب:</strong> {selectedAccount.accountNumber}
          </p>
          <p>
            <strong>ما به التفاوت:</strong>{" "}
            {selectedAccount.difference.toLocaleString()} ریال
          </p>
          <p>
            <strong>شعبه بانک:</strong> {selectedAccount.branchName}
          </p>
        </div>
      </Modal>
    ),
  };
};
