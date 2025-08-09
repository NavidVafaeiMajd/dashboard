import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { validation } from "./validation";
import { Search } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/shared/data-table";
import { PAYROLL_LIST } from "./const";
import CuDatePicker from "@/components/shared/DatePicker";

const PayrollList = () => {
  useEffect(() => {
    document.title = "عملیات حقوق";
  }, []);
  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      employee: "",
      date: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex flex-col w-full rounded-md overflow-hidden shadow-md h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row bg-bgBack px-6 py-4 justify-between gap-x-10 gap-y-10 items-end"
          >
            <FormField
              control={form.control}
              name="employee"
              render={({ field }) => (
                <FormItem className="w-full space-y-2">
                  <FormLabel className="text-base">کارمند </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      dir="rtl"
                    >
                      <SelectTrigger className="w-full min-h-12">
                        <SelectValue
                          className="placeholder:text-lg"
                          placeholder="انتخاب کارمند"
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {/* Options would be dynamically generated here */}
                        <SelectItem value="boss1">کارمند 1</SelectItem>
                        <SelectItem value="boss2">کارمند 2</SelectItem>
                        <SelectItem value="boss3">کارمند 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="w-full space-y-2">
                    <FormLabel className="text-base">
                      تاریخ
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <CuDatePicker
                        value={field.value}
                            onChange={field.onChange}
                           
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


            <div className="w-full ">
              <Button className="min-h-12 w-30 text-lg">
                <Search className="size-full" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex flex-col w-full bg-bgBack rounded-md overflow-hidden shadow-md h-full mb-1">
        <div className="flex bg-bgBack w-full p-2 px-5 border-b-2 border-red-500 items-center">
          <h2> لیست همه واحدها</h2>
        </div>

        <DataTable
          columns={columns}
          data={PAYROLL_LIST}
          searchableKeys={[
            "employee",
            "employeeId",
            "type",
            "monthlySalary",
            "salary",
            "status",
          ]}
        />
      </div>
    </div>
  );
};

export default PayrollList;
