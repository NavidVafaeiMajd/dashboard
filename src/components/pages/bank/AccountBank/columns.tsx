import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "./Modal";
import type { ColumnDef } from "@tanstack/react-table";
import ActionsCell from "@/components/shared/ActionsCell";
import { DeleteDialog } from "@/components/shared/DeleteDialog";

export interface BankAccount {
  id: string;
  accountType: string;
  accountNumber: string;
  difference: number;
  branchName: string;
  [key: string]: string | number;
}

export const useBankColumns = () => {
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(null);

  const columns: ColumnDef<BankAccount>[] = [
    {
      accessorKey: "accountType",
      header: "نوع حساب بانکی",
      cell: ({ row }) => <div className="text-right">{row.getValue("accountType")}</div>,
    },
    {
      accessorKey: "accountNumber",
      header: "شماره حساب بانکی",
      cell: ({ row }) => <div className="text-center">{row.getValue("accountNumber")}</div>,
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
      cell: ({ row }) => <div className="text-center">{row.getValue("branchName")}</div>,
    },
    {
      id: "actions",
      header: "عملیات",
      cell: ({ row }) => {
        const rowData = row.original;
        return (
          <div className="flex items-center gap-2">
            <DeleteDialog onConfirm={() => {}} />
            <ActionsCell
          actions={[
            { label: "نمایش جزییات", path: `/bank/accounts-list-details/${rowData.id}` },

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
          <p><strong>نوع حساب:</strong> {selectedAccount.accountType}</p>
          <p><strong>شماره حساب:</strong> {selectedAccount.accountNumber}</p>
          <p><strong>ما به التفاوت:</strong> {selectedAccount.difference.toLocaleString()} ریال</p>
          <p><strong>شعبه بانک:</strong> {selectedAccount.branchName}</p>
        </div>
      </Modal>
    ),
  };
};
