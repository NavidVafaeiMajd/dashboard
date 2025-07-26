import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import React from "react";
import DatePicker from "react-multi-date-picker";
import { Controller } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { employExite } from "@/component/shared/validtion";


type FormData = z.infer<typeof employExite>;

interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ accordion, setAccordion }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(employExite),
  });

  const onSubmit = (data: FormData) => {
    console.log("📦 Submitted Data:", data);
  };

  const onError: SubmitErrorHandler<FormData> = (formErrors) => {
    Object.values(formErrors).forEach((error) => {
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
      ) {
        toast.error(error.message);
      }
    });
  };
  const profileImage = watch("profileImage");
  const [fileName, setFileName] = useState("انتخاب فایل...");

  useEffect(() => {
    if (profileImage && profileImage.length > 0) {
      setFileName(profileImage[0].name);
    } else {
      setFileName("انتخاب فایل...");
    }
  }, [profileImage]);

  return (
    <>
      <ToastContainer toastClassName="custom-toast-font" position="top-right" />

      <div className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
        <div className="">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="grid md:grid-cols-6 gap-5  h-full"
          >
            <div className="col-span-4 shadow-md bg-bgBack">
              <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                <h2>ثبت جدید انفصال از خدمت </h2>
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
              <div className="p-5 flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <label htmlFor="">
                      کارمند برای انفصال
                      <span className="text-red-500">*</span>
                      <div className="flex my-2 justify-stretch">
                        <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                        <div className="w-full!">
                          <input
                            placeholder="کارمند برای انفصال "
                            className={`${
                              errors.employee && "border-red-500!"
                            } w-full`}
                            {...register("employee")}
                          />
                          {errors.employee && (
                            <>
                              <p className="text-red-500 text-sm">
                                {errors.employee.message}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      تاریخ انفصال کارمند
                      <span className="text-red-500">*</span>
                      <div className="flex  my-2">
                        <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                        <div className="w-full">
                          <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value } }) => (
                              <DatePicker
                                value={value || ""}
                                onChange={(date) => {
                                  const formatted = date?.isValid
                                    ? date.format("YYYY/MM/DD")
                                    : "";
                                  onChange(formatted);
                                }}
                                format="YYYY/MM/DD"
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                              />
                            )}
                          />
                          {errors.date && (
                            <>
                              <p className="text-red-500 text-sm">
                                {errors.date.message}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                  <div>
                    <label htmlFor="">
                      نوع انفصال
                      <span className="text-red-500">*</span>
                      <select {...register("exitType")}>
                        <option value="">انتخاب کنید</option>
                        <option value="male">تست</option>
                      </select>
                      {errors.exitType && (
                        <>
                          <p className="text-red-500 text-sm">
                            {errors.exitType.message}
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      تشکیل جلسه کمیته انضباطی
                      <span className="text-red-500">*</span>
                      <select {...register("meeting")}>
                        <option value="">انتخاب کنید</option>
                        <option value="male">بله</option>
                        <option value="female">خیر</option>
                      </select>
                      {errors.meeting && (
                        <>
                          <p className="text-red-500 text-sm">
                            {errors.meeting.message}
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      غیرفعال کردن اکانت
                      <span className="text-red-500">*</span>
                      <select {...register("accountDis")}>
                        <option value="">انتخاب کنید</option>
                        <option value="male">بله</option>
                        <option value="female">خیر</option>
                      </select>
                      {errors.accountDis && (
                        <>
                          <p className="text-red-500 text-sm">
                            {errors.accountDis.message}
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
                <div className=" gap-10">
                  <div>
                    <label htmlFor="textLetter">
                      متن نامه
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="textLetter"
                      {...register("textLetter")}
                    ></textarea>
                    {errors.textLetter && (
                      <>
                        <p className="text-red-500 text-sm">
                          {errors.textLetter.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="border-t-1 border-border bg-white p-5 flex gap-3">
                <button type="reset">بازنشانی</button>
                <button type="submit">ذخیره</button>
              </div>
            </div>
            <div className="col-span-2 max-h-max shadow-md bg-bgBack">
              <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13!">
                <h2>قرارداد انفصال </h2>
              </div>
              <div className="py-2 px-5 ">
                <div className="">
                  <div>
                    <label htmlFor="fileInput">
                      پیوست
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <label
                    htmlFor="fileInput"
                    className="file-input my-3 cursor-pointer flex items-center gap-2 rounded-sm overflow-hidden border-1 border-border"
                  >
                    {fileName}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("profileImage")}
                    id="fileInput"
                    className="hidden "
                  />
                  {typeof errors.profileImage?.message === "string" && (
                    <p className="text-red-500 text-sm">
                      {errors.profileImage.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
