import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import PermissionsTree from "./PermissionsTree/PermissionsTree";
import { setRoles } from "@/component/shared/validtion";
import type z from "zod";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  staffPermissions,
  managePermissions,
} from "./PermissionsTree/permissionsData";
type formData = z.infer<typeof setRoles>;
interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form = ({ accordion, setAccordion }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(setRoles),
  });

  const onSubmit = (data: formData) => {
    const finalData = { ...data };
    console.log("📦 Submitted Data:", finalData);
  };

  const onError: SubmitErrorHandler<formData> = (formErrors) => {
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
            onSubmit={handleSubmit(onSubmit, onError)}
            className="gap-5 h-full"
          >
            <div className="col-span-4 shadow-md bg-bgBack">
              <div className="flex justify-between items-center py-2 px-5 border-b-2 border-red-500 min-h-13">
                <h2> ثبت جدید سطح دسترسی </h2>
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
              <div className="p-5 md:grid md:grid-cols-6 gap-10">
                <div className="col-span-2">
                  <div>
                    <label htmlFor="">
                      نام سطح دسترسی
                      <span className="text-red-500">*</span>
                      <div className="flex my-2">
                        <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                        <input
                          type="text"
                          className="w-full"
                          placeholder="نام سطح دسترسی "
                          {...register("permissionName")}
                        />
                      </div>
                    </label>
                    {errors.permissionName && (
                      <p className="text-red-500 text-sm">
                        {errors.permissionName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">
                      انتخاب دسترسی
                      <select {...register("choosePremition")}>
                        <option className="opacity-10!" value=""> یک گزینه را انتخاب کنید </option>
                        <option value="premitionAll">دسترسی به کل منو</option>
                        <option value="premitionCustomMenu">
                          دسترسی به منو سفارشی
                        </option>
                      </select>
                    </label>
                    {errors.choosePremition && (
                      <p className="text-red-500 text-sm">{errors.choosePremition.message}</p>
                    )}
                  </div>
                </div>
                <div className="col-span-4 sm:grid grid-cols-2 gap-4 mt-5">
                  <div className="text-lg!">
                    <label htmlFor="" className="">
                      <h2 className="text-greenDark bg-greenLight w-full py-4 px-2">
                        سطح دسترسی کارکنان
                      </h2>
                      <div className="bg-white border-4 border-border">
                        <PermissionsTree
                          data={staffPermissions}
                          onChange={(selected) => {
                            console.log("Selected permissions:", selected);
                          }}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="text-lg!">
                    <label htmlFor="" className="">
                      <h2 className="text-greenDark bg-greenLight w-full py-4 px-2">
                        سطح دسترسی مدیر
                      </h2>
                      <div className="bg-white border-4 border-border">
                        <PermissionsTree
                          data={managePermissions}
                          onChange={(selected) => {
                            console.log("Selected permissions:", selected);
                          }}
                        />
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
            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
