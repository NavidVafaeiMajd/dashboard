"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Clock, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import TimeKeeper from "react-timekeeper";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type z from "zod";
import { modalValidation } from "./modalValidation";

interface NewRequestModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewRequestModal = ({ open, setOpen }: NewRequestModalProps) => {
  const [showEntryTime, setShowEntryTime] = useState(false);
  const [showExitTime, setShowExitTime] = useState(false);

  const form = useForm<z.infer<typeof modalValidation>>({
    resolver: zodResolver(modalValidation),
    defaultValues: {
      employee: "",
      date: new Date(),
      entryDate: "",
      exitDate: "",
      description: "",
    },
  });

  const onSubmit = (data: z.infer<typeof modalValidation>) => {
    console.log("submitted data:", data);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/25 backdrop-blur-sm fixed grid inset-0 z-50 overflow-y-auto items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-lg shadow-lg p-6 space-y-8 w-full max-w-2xl"
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-center justify-center text-center mb-4 w-full">
                  <h1 className="text-cupurple text-xl font-semibold">
                    افزودن درخواست اضافه کاری اطلاعات
                  </h1>
                  <span className="text-gray-700 text-sm">
                    برای افزودن این رکورد به اطلاعات زیر نیاز داریم
                  </span>
                </div>
              </div>
              <Separator />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="employee"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-2">
                      <FormLabel className="text-lg">
                        کارمند<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                              dir="rtl"
                              
                        >
                          <SelectTrigger className="w-full min-h-12">
                            <SelectValue placeholder="کارمند" />
                          </SelectTrigger>
                          <SelectContent className="z-100">
                            <SelectItem value="employee1">کارمند 1</SelectItem>
                            <SelectItem value="employee2">کارمند 2</SelectItem>
                            <SelectItem value="employee3">کارمند 3</SelectItem>
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
                      <FormLabel className="text-lg">
                        تاریخ<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled
                          value={field.value.toLocaleDateString("fa-IR")}
                          className="w-full min-h-12 border rounded p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col md:flex-row gap-4">
                  {/* زمان ورود */}
                  <FormField
                    control={form.control}
                    name="entryDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-lg">
                          زمان ورود<span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <div>
                            <div
                              onClick={() => setShowEntryTime((prev) => !prev)}
                              className="flex items-center cursor-pointer"
                            >
                              <Input
                                readOnly
                                value={field.value || ""}
                                placeholder="انتخاب زمان"
                                className="w-full border rounded p-2 min-h-12 cursor-pointer relative"
                              />
                              <div className="bg-bgBack size-12 flex items-center justify-center">
                                <Clock className="size-5" />
                              </div>
                            </div>

                            {showEntryTime && (
                              <div className="mt-2 border rounded p-2 z-50 bg-white shadow absolute">
                                <TimeKeeper
                                  time={field.value || "12:00"}
                                  onChange={(data) => {
                                    field.onChange(data.formatted24);
                                  }}
                                  onDoneClick={() => setShowEntryTime(false)}
                                  switchToMinuteOnHourSelect
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="exitDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-lg">
                          زمان خروج<span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <div>
                            <div
                              onClick={() => setShowExitTime((prev) => !prev)}
                              className="flex items-center cursor-pointer"
                            >
                              <Input
                                readOnly
                                value={field.value || ""}
                                placeholder="انتخاب زمان"
                                className="w-full border rounded p-2 min-h-12 cursor-pointer relative"
                              />
                              <div className="bg-bgBack size-12 flex items-center justify-center">
                                <Clock className="size-5" />
                              </div>
                            </div>

                            {showExitTime && (
                              <div className="mt-2 border rounded p-2 z-50 bg-white shadow absolute">
                                <TimeKeeper
                                  time={field.value || "12:00"}
                                  onChange={(data) => {
                                    field.onChange(data.formatted24);
                                  }}
                                  onDoneClick={() => setShowExitTime(false)}
                                  switchToMinuteOnHourSelect
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-2">
                      <FormLabel className="text-lg">
                        علت درخواست<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="علت درخواست"
                          className="w-full min-h-20 border rounded"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Separator className="my-4" />

                <div className="flex justify-between gap-4">
                  <Button
                    type="submit"
                    className="px-4 py-2 rounded text-lg h-12"
                  >
                    ارسال درخواست
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="px-4 py-2 rounded text-lg h-12"
                    onClick={() => setOpen(false)}
                  >
                    لغو
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewRequestModal;
