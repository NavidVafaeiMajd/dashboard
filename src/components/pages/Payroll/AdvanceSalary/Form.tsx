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
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import RichTextEditor from "@/components/shared/RichTextEditor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";

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
  image: null
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
      <div className="flex flex-col w-full rounded-md overflow-hidden  h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-6 gap-5 shadow-md"
          >
            <div className="col-span-4">
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
                      name="title"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            عنوان <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="عنوان"
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
                            شعبه <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="شعبه"
                              className="min-h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="gap-5">
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
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <FormField
                      control={form.control}
                      name="personnelNumber"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            شماره پرسنلی <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="شماره پرسنلی"
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
                      name="birthCertificateNumber"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            شماره شناسنامه{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder=" شماره شناسنامه "
                              className="min-h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <FormField
                      control={form.control}
                      name="nationalCode"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            کد ملی <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="کد ملی  "
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
                      name="employStatus"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            وضیعت استخدام
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                              dir="rtl"
                            >
                              <SelectTrigger className="w-full min-h-12">
                                <SelectValue placeholder="وضیعت استخدام" />
                              </SelectTrigger>

                              <SelectContent>
                                {/* Options would be dynamically generated here */}
                                <SelectItem value="boss1">
                                  استخدام قراردادی{" "}
                                </SelectItem>
                                <SelectItem value="boss2">
                                  استخدام رسمی
                                </SelectItem>
                              </SelectContent>
                            </Select>
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
                      name="from"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-2">
                          <FormLabel className="text-base">
                            صادره <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="  صادره "
                              className="min-h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="reqDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          تاریخ درخواست
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value ? new Date(field.value) : ""}
                            onChange={(date) =>
                              field.onChange(
                                date?.isValid ? date.toDate() : null
                              )
                            }
                            format="YYYY/MM/DD"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            placeholder="تاریخ درخواست"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          تاریخ تولد
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value ? new Date(field.value) : ""}
                            onChange={(date) =>
                              field.onChange(
                                date?.isValid ? date.toDate() : null
                              )
                            }
                            format="YYYY/MM/DD"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            placeholder=" تاریخ تولد "
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
                    name="newsText"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          متن ابلاغیه <span className="text-red-500">*</span>
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
