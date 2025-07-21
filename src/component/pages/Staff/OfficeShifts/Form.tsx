import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

// فرمت‌های مجاز عکس
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp"
];

//shema
const schema = z.object({
  firstName: z.string()
    .min(1, "نام الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
    .describe("مثلاً: نوید"),

  lastName: z.string()
    .min(1, "نام خانوادگی الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
    .describe("مثلاً: محمدی"),

  personnelCode: z.string()
    .regex(/^\d+$/, "فقط عدد مجاز است")
    .min(1, "کد پرسنلی الزامی است")
    .describe("مثلاً: 12345"),

  phone: z.string()
    .regex(/^09\d{9}$/, "شماره تماس معتبر نیست")
    .describe("مثلاً: 09121234567"),

  gender: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),

  email: z.email("ایمیل معتبر وارد کنید")
    .describe("مثلاً: example@gmail.com"),

  username: z.string()
    .min(3, "نام کاربری حداقل باید ۳ حرف باشد"),

  password: z.string()
    .min(6, "رمز عبور حداقل ۶ کاراکتر"),

  shift: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),


  role: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),


  department: z.string().min(1, "واحد سازمانی الزامی است"),

  position: z.string().min(1, "سمت سازمانی الزامی است"),

  monthlySalary: z.string()
    .regex(/^\d+$/, "فقط عدد مجاز است")
    .describe("مثلاً: 5000000"),

  dailySalary: z.string()
    .regex(/^\d+$/, "فقط عدد مجاز است")
    .describe("مثلاً: 200000"),

  salaryType: z.string().refine((val) => val !== "", {
    message: "لطفاً یک گزینه انتخاب کنید",
  }),

profileImage: z
  .any()
  .refine((files) => files instanceof FileList && files.length > 0, {
    message: "فایل انتخاب نشده",
  })
  .refine((files) => {
    const file = files[0];
    return file && file.size <= MAX_FILE_SIZE;
  }, {
    message: "حجم فایل باید کمتر از ۲ مگابایت باشد",
  })
  .refine((files) => {
    const file = files[0];
    return file && ACCEPTED_IMAGE_TYPES.includes(file.type);
  }, {
    message: "فرمت فایل باید jpeg، jpg، png یا webp باشد",
  }),
  
});


type FormData = z.infer<typeof schema>;

interface Props {
    accordion: boolean,
    setAccordion : React.Dispatch<React.SetStateAction<boolean>>
}


const Form = ({ accordion, setAccordion }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,

    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    
    const onSubmit = (data: FormData) => {
        console.log("📦 Submitted Data:", data);
    };
    

const onError: SubmitErrorHandler<FormData> = (formErrors) => {
  Object.values(formErrors).forEach((error) => {
    if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
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
            
                        <div className={`accordion  ${accordion? " mb-10 show": "h-0 hidden"}`}>
                <div className="">
                    <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit , onError)} className="grid md:grid-cols-6 gap-5  h-full">
                        <div className="col-span-4 shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                                <h2>ثبت جدید کارمند</h2>
                                <button onClick={(e) => { setAccordion(!accordion); e.preventDefault() }} className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer">
                                    <FaMinus className="w-5 h-5" />
                                    مخفی
                                </button>
                            </div> 
                            <div className="p-5 flex flex-col gap-5">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <label htmlFor="">نام 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2 justify-stretch">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                                                <div className="w-full!">
                                                    <input placeholder="نام" className={`${errors.firstName && "border-red-500!"} w-full`}  {...register("firstName")} />
                                                    {errors.firstName && (<><p className="text-red-500 text-sm">{ errors.firstName.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام خانوداگی
                                            <span className="text-red-500">*</span>
                                            <div className="flex  my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <div className="w-full"> 
                                                    <input placeholder="نام خانوادگی" className={`${errors.lastName && "border-red-500!"} w-full`}  {...register("lastName")} />
                                                    {errors.lastName && (<><p className="text-red-500 text-sm">{ errors.lastName.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">کد پرسنلی
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <div className="w-full">
                                                    <input placeholder="کد پرسنلی" className={`${errors.personnelCode && "border-red-500!"} w-full`}  {...register("personnelCode")} />
                                                    {errors.personnelCode && (<><p className="text-red-500 text-sm">{ errors.personnelCode.message }</p></>)}
                                                </div>
                                             </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">شماره تماس
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                                                <div className="w-full">
                                                    <input placeholder="شماره تماس" className={`w-full ${errors.phone && "border-red-500!"}`}  {...register("phone")} />
                                                    {errors.phone && (<><p className="text-red-500 text-sm">{ errors.phone.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            جنسیت 
                                            <select {...register("gender")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.gender && (<><p className="text-red-500 text-sm">{ errors.gender.message }</p></>)}
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <label htmlFor="">ایمیل
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <MdEmail className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <div className="w-full">
                                                    <input placeholder="ایمیل" className={`${errors.email && "border-red-500!"} w-full`}  {...register("email")} />
                                                    {errors.email && (<><p className="text-red-500 text-sm">{ errors.email.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">نام کاربری
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <div className="w-full">
                                                    <input placeholder="نام کاربری" className={`${errors.username && "border-red-500!"} w-full`}  {...register("username")} />
                                                    {errors.username && (<><p className="text-red-500 text-sm">{ errors.username.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">رمز عبور
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <FaEyeSlash className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13"/>
                                                <div className="w-full">
                                                    <input placeholder="رمز عبور" className={`${errors.password && "border-red-500!"} w-full`}  {...register("password")} />
                                                    {errors.password && (<><p className="text-red-500 text-sm">{ errors.password.message }</p></>)}
                                                </div>                                            </div>
                                        </label>
                                    </div>
                                  <div>
                                        <label htmlFor="">
                                            شیفت اداره 
                                            <select {...register("shift")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.shift && (<><p className="text-red-500 text-sm">{ errors.shift.message }</p></>)}
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            سطح دسترسی 
                                            <select {...register("role")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.role && (<><p className="text-red-500 text-sm">{ errors.role.message }</p></>)}
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-10">
                                  <div>
                                        <label htmlFor="">
                                            واحد سازمانی 
                                            <select {...register("department")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.department && (<><p className="text-red-500 text-sm">{ errors.department.message }</p></>)}
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            سمت سازمانی 
                                            <select {...register("position")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.position && (<><p className="text-red-500 text-sm">{ errors.position.message }</p></>)}
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-10">
                                    <div>
                                        <label htmlFor="">دستمزد ماهیانه 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <div className="w-full">
                                                    <input placeholder="دستمزد ماهیانه " className={`${errors.monthlySalary && "border-red-500!"} w-full`}  {...register("monthlySalary")} />
                                                    {errors.monthlySalary && (<><p className="text-red-500 text-sm">{ errors.monthlySalary.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">دستمزد روزانه 
                                            <span className="text-red-500">*</span>
                                            <div className="flex my-2">
                                                <div className="w-full">
                                                    <input placeholder="دستمزد روزانه " className={`${errors.dailySalary && "border-red-500!"} w-full`}  {...register("dailySalary")} />
                                                    {errors.dailySalary && (<><p className="text-red-500 text-sm">{ errors.dailySalary.message }</p></>)}
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            نوع فیش حقوقی 
                                            <select {...register("salaryType")}>
                                                <option value="">انتخاب کنید</option>
                                                <option value="male">آقا</option>
                                                <option value="female">خانم</option>
                                            </select>
                                            {errors.salaryType && (<><p className="text-red-500 text-sm">{ errors.salaryType.message }</p></>)}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t-1 border-border bg-white p-5 flex gap-3">
                                <button type="reset">بازنشانی</button>
                                <button type="submit">ذخیره</button>
                            </div>
                        </div>
                        <div className="col-span-2 max-h-max shadow-md bg-bgBack">
                            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13!" >
                                <h2>تصویر پروفایل</h2>
                            </div>
                            <div className="py-2 px-5 ">
                                <div className="">
                                    <div>
                                        <label htmlFor="fileInput">
                                            تصویر پروفایل 
                                            <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    <label htmlFor="fileInput" className="file-input my-3 cursor-pointer flex items-center gap-2 rounded-sm overflow-hidden border-1 border-border">
                                        {fileName}
                                    </label>
                                        <input
                                        type="file"
                                        accept="image/*"
                                        {...register("profileImage")}
                                        id="fileInput" className="hidden "
                                    />
                                    {errors.profileImage && (<><p className="text-red-500 text-sm">{ errors.profileImage.message }</p></>)}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Form;