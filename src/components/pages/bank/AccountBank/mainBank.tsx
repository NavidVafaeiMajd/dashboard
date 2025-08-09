"use client";

import { useBankColumns } from "./columns";
import { DataTable } from "@/components/shared/data-table";
import { BANK_ACCOUNTS } from "./const";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const validation = z.object({
  accountType: z.string().min(1, "نوع حساب الزامی است"),
  initialBalance: z.string().min(1, "تراز اولیه الزامی است"),
  accountNumber: z.string().min(1, "شماره حساب الزامی است"),
  branchCode: z.string().min(1, "کد شعبه الزامی است"),
  branchName: z.string().min(1, "نام شعبه الزامی است"),
});

export default function MainBank() {
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      accountType: "",
      initialBalance: "",
      accountNumber: "",
      branchCode: "",
      branchName: "",
    },
  });

  const fechForSubmit = () => {
    console.log(form);
  };

  const { columns, modal } = useBankColumns();

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log("✅ Form Data:", data);
  };

  return (
    <div className="grid grid-cols-6 gap-10">
      {/* فرم ثبت جدید حساب */}
      <div className="shadow-md col-span-2 rounded-[5px] gap-[1.5rem] bg-[#F9F9FB]">
        <div className="w-full h-[45px] p-2 items-center rounded-t-[9px] bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
          <span className="text-[17px]">ثبت جدید حساب</span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full p-6 space-y-6"
          >
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">
                    نوع حساب بانکی <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full  h-[45px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="initialBalance"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">
                    تراز اولیه <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex w-full">
                      <div className="w-[56px] h-[46px] flex justify-center items-center bg-[#F0F2F8] text-sm">
                        IRR
                      </div>
                      <Input
                        {...field}
                        className="w-full rounded-l-none h-[45px]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">
                    شماره حساب بانکی <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full h-[45px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branchCode"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">
                    کد شعبه <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full h-[45px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="branchName"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">
                    شعبه بانک <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} className="w-full min-h-30!" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <button
                onClick={fechForSubmit}
                // type="submit"
                className="w-[80px] h-[50px] rounded-[8px] text-[#ffff] rounded bg-[#1E824C]"
              >
                ذخیره
              </button>
            </div>
          </form>
        </Form>
      </div>

      {/* جدول نمایش حساب‌ها */}
      <div className="shadow-md col-span-4 rounded-[5px] h-fit bg-[#F9F9FB]">
        <div className="w-full h-[45px] p-2 items-center rounded-t-[9px] bg-[#FFF7FA] border-b-2 border-[#FF3A86]">
          <span className="text-[17px]">لیست حساب‌ها</span>
        </div>
        <div>
          <DataTable
            columns={columns}
            data={BANK_ACCOUNTS}
            searchableKeys={["accountNumber", "accountType"]}
          />
          {modal} {/* 👈 نمایش مودال بر اساس انتخاب */}
        </div>
      </div>
    </div>
  );
}
