import { FaMinus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TimeKeeper from "react-timekeeper";
import { officeShift } from "@/component/shared/validtion";


export type FormData = z.infer<typeof officeShift>;

interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

type DayKey =
  | "saturday"
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

type TimeType = "entry" | "exit";

type ActivePicker = {
  day: DayKey;
  type: TimeType;
  top: number;
  left: number;
} | null;

const dayLabels: Record<DayKey, string> = {
  saturday: "شنبه",
  sunday: "یک‌شنبه",
  monday: "دوشنبه",
  tuesday: "سه‌شنبه",
  wednesday: "چهارشنبه",
  thursday: "پنج‌شنبه",
  friday: "جمعه",
};

const Form = ({ accordion, setAccordion }: Props) => {
  const [weekTimes, setWeekTimes] = useState<
    Record<DayKey, { entry: string; exit: string }>
  >({
    saturday: { entry: "", exit: "" },
    sunday: { entry: "", exit: "" },
    monday: { entry: "", exit: "" },
    tuesday: { entry: "", exit: "" },
    wednesday: { entry: "", exit: "" },
    thursday: { entry: "", exit: "" },
    friday: { entry: "", exit: "" },
  });

  const [activePicker, setActivePicker] = useState<ActivePicker>(null);
  const [tempTime, setTempTime] = useState<string>("12:00");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(officeShift),
  });

  const onSubmit = (data: FormData) => {
    const finalData = { ...data, weekTimes };
    console.log("📦 Submitted Data:", finalData);
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

  const handleInputClick = (
    e: React.MouseEvent<HTMLInputElement>,
    day: DayKey,
    type: TimeType
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTempTime(weekTimes[day][type] || "12:00");
    setActivePicker({
      day,
      type,
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2,
    });
  };

  const handleTimeSelect = () => {
    if (!activePicker) return;
    const { day, type } = activePicker;
    setWeekTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: tempTime },
    }));
    setActivePicker(null);
  };

  const clearTime = (day: DayKey, type: TimeType) => {
    setWeekTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: "" },
    }));
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
                <h2> ثبت جدید شیفت اداره </h2>
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
                  نام شیفت
                  <span className="text-red-500">*</span>
                  <div className="flex my-2 justify-stretch">
                    <FaUser className="bg-[#F0F2F8] text-[#495057] p-4 h-13 w-13" />
                    <div>
                      <input
                        placeholder="نام شیفت"
                        className={`$${
                          errors.firstName ? "border-red-500!" : ""
                        } w-full`}
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                </label>

                {Object.entries(weekTimes).map(([day, times]) => (
                  <div key={day}>
                    <h3 className="font-bold mb-1">
                      {dayLabels[day as DayKey]}
                    </h3>
                    <div className="flex gap-4 mb-2">
                      {(["entry", "exit"] as TimeType[]).map((type) => (
                        <div key={type} className="flex flex-col gap-1">
                          <label>{type === "entry" ? "ورود" : "خروج"}</label>
                          <input
                            readOnly
                            value={times[type]}
                            onClick={(e) =>
                              handleInputClick(e, day as DayKey, type)
                            }
                            className="border px-3 py-1 rounded cursor-pointer"
                          />
                          {times[type] && (
                            <button
                              type="button"
                              onClick={() => clearTime(day as DayKey, type)}
                              className=" left-2 top-8 text-red-500 text-xs bg-red-100 px-2 py-0.5 rounded hover:bg-red-200"
                            >
                              حذف
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {activePicker && (
                  <div
                    className="absolute z-50 bg-white border border-gray-300 rounded shadow-xl"
                    style={{
                      top: `${activePicker.top}px`,
                      left: `${activePicker.left}px`,
                      transform: "translate(-50%, -100%)",
                    }}
                  >
                    <TimeKeeper
                      time={tempTime}
                      onChange={(data) => setTempTime(data.formatted24)}
                      switchToMinuteOnHourSelect
                    />
                    <div className="flex justify-end p-2 gap-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                        onClick={handleTimeSelect}
                        type="button"
                      >
                        تأیید
                      </button>
                      <button
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                        onClick={() => setActivePicker(null)}
                        type="button"
                      >
                        بستن
                      </button>
                    </div>
                  </div>
                )}
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
