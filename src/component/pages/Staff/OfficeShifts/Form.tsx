import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast, } from "react-toastify";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TimeKeeper from "react-timekeeper";


//shema
const schema = z.object({
  firstName: z
    .string()
    .min(1, "نام الزامی است")
    .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است")
});

type FormData = z.infer<typeof schema>;

interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ accordion, setAccordion }: Props) => {
const [time, setTime] = useState(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`; // e.g. "14:05"
});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
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

  return (
    <>

      <div className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
        <div className="">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="gap-5  h-full"
          >
            <div className="shadow-md bg-bgBack">
              <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                <h2>ثبت جدید کارمند</h2>
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
                <label htmlFor="">
                  نام
                  <span className="text-red-500">*</span>
                  <div className="flex my-2 justify-stretch">
                    <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                    <div className="w-full!">
                      <input
                        placeholder="نام"
                        className={`${
                          errors.firstName && "border-red-500!"
                        } w-full`}
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <>
                          <p className="text-red-500 text-sm">
                            {errors.firstName.message}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </label>
                <TimeKeeper
                  time={time}
                  onChange={(data) => setTime(data.formatted12)}
                />
              </div>
              <div className="border-t-1 border-border bg-white p-5 flex gap-3">
                <button type="reset">بازنشانی</button>
                <button type="submit">ذخیره</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
