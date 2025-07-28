import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { exitType } from "@/components/shared/validtion";

type FormData = z.infer<typeof exitType>;

const Form = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(exitType),
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
         <div>
            <div>
               <form
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className="h-full"
               >
                  <div className="shadow-md bg-bgBack">
                     <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                        <h2>ثبت جدید انفصال از خدمت </h2>
                     </div>
                     <div className="p-5 flex flex-col gap-5">
                        <div>
                           <div>
                              <label htmlFor="">
                                 نوع انفصال
                                 <span className="text-red-500">*</span>
                                 <div className="flex my-2 justify-stretch">
                                    <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                                    <div className="w-full!">
                                       <input
                                          placeholder="نوع انفصال "
                                          className={`${
                                             errors.exitType &&
                                             "border-red-500!"
                                          } w-full`}
                                          {...register("exitType")}
                                       />
                                       {errors.exitType && (
                                          <>
                                             <p className="text-red-500 text-sm">
                                                {errors.exitType.message}
                                             </p>
                                          </>
                                       )}
                                    </div>
                                 </div>
                              </label>
                           </div>
                        </div>
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
