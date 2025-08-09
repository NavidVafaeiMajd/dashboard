import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMinus } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichTextEditor from "@/components/shared/RichTextEditor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCM = ({ accordion, setAccordion }: Props) => {
  useEffect(() => {
    document.title = "خط مشی ها";
  }, []);

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      title: "",
      bank: "",
      branch: "",
      name: "",
      nationalCode: "",
      employStatus: "",
      from: "",
      reqDate: null,
      birthDate: null,
      newsText: "",
      image: null,
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
      <div className="flex flex-col w-full rounded-md overflow-hidden  h-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="shadow-md">
            <div>
              <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
                <h2>ثبت جدید خط مشی</h2>
                <button
                  onClick={(e) => {
                    setAccordion(!accordion);
                    e.preventDefault();
                  }}
                  className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer"
                >
                  <FaMinus className="w-5 h-5" />
                  مخفی
                </button>
              </div>
              <div className="bg-bgBack space-y-4 p-5">
                <div className="grid grid-cols-3 gap-5">
                  <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          نام کارمند
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                            dir="rtl"
                          >
                            <SelectTrigger className="w-full min-h-12">
                              <SelectValue placeholder="نام کارمند " />
                            </SelectTrigger>

                            <SelectContent>
                              {/* Options would be dynamically generated here */}
                              <SelectItem value="boss1">اکبر محمدی</SelectItem>
                              <SelectItem value="boss2">
                                حسین علی زاده
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="bank"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            بانک <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="بانک"
                              className="min-h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="branch"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            مقدار <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="flex w-full items-stretch">
                              <div className="w-[56px] flex justify-center items-center border-1 border-border bg-[#F0F2F8] text-sm rounded-tr-sm rounded-br-sm">
                                IRR
                              </div>
                              <Input
                                placeholder="مقدار"
                                className="min-h-12"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            یک بار کسر
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                              dir="rtl"
                            >
                              <SelectTrigger className="w-full min-h-12">
                                <SelectValue placeholder="نام کارمند " />
                              </SelectTrigger>

                              <SelectContent>
                                {/* Options would be dynamically generated here */}
                                <SelectItem value="boss1">
                                  بله
                                </SelectItem>
                                <SelectItem value="boss2">
                                  خیر
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="personnelNumber"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            مبلغ اقساط ماهیانه <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="flex w-full items-stretch">
                              <div className="w-[56px] flex justify-center items-center border-1 border-border bg-[#F0F2F8] text-sm rounded-tr-sm rounded-br-sm">
                                IRR
                              </div>
                              <Input
                                placeholder="0"
                                className="min-h-12"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="newsText"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          علت درخواست <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full bg-white p-5">
                <Button className="min-h-12 w-30 text-lg">ذخیره</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormCM;
