import Chart from "react-apexcharts";
import { LuUsersRound } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

interface props {
  absent: number;
  present: number;
}
const StaffAttendanceChart = ({ absent, present }: props) => {
  return (
    <>
      <div className="text-left! desk-cart p-1 md:p-5 grid grid-cols-2 md:col-start-2">
        <div>
          <h2 className="flex max-md:flex-col items-center">
            {" "}
                      <span>حضور کارکنان</span> <span className="mx-3">{new Date().toLocaleDateString("fa-IR")}</span>
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex gap-2">
              <LuUsersRound className="w-5 h-5 text-blue-500" />
              مجموع کارکنان
            </div>
            <div className="flex gap-2 justify-between">
              <span className="flex gap-2">
                <FiUser className="w-5 h-5 text-green-500" />
                حاضر
                <IoIosArrowRoundUp className="w-5 h-5 text-green-500" />
              </span>
              <span>{present}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="flex gap-2">
                <FiUser className="w-5 h-5 text-red-500" />
                غایب
                <IoIosArrowRoundDown className="w-5 h-5 text-red-500" />
              </span>
              <span>{absent}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Chart
            type="bar"
            series={[
              {
                name: "غیبت کارکنان",
                data: [absent],
              },
              {
                name: " حضور کارکنان",
                data: [present],
              },
            ]}
            options={{
              chart: {
                fontFamily: "myFirstFont",
                toolbar: {
                  show: false,
                },
              },

              colors: ["#199afb", "#00e396"],
              plotOptions: {
                bar: {
                  columnWidth: "40%", // ستون‌ها باریک‌تر می‌شن → فاصله میفته
                  distributed: false, // هر سری یک رنگ داشته باشه
                },
              },
              xaxis: {
                categories: [""], // فقط یه دسته بی‌نام که دوتا ستون کنارش رسم میشه
                labels: {
                  show: false, // مخفی کردن برچسب پایین
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },
              yaxis: {
                show: false, // مخفی کردن محور عمودی
              },
              grid: {
                show: false, // مخفی کردن خطوط پس‌زمینه
              },
              dataLabels: {
                enabled: false, // عدم نمایش اعداد روی ستون
              },
              legend: {
                show: false, // عدم نمایش legend
              },
              title: {
                text: "",
              },
              responsive: [
                {
                  breakpoint: 900, // هر عرضی کمتر از این مقدار
                  options: {
                    legend: {
                      position: "bottom",
                    },
                  },
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StaffAttendanceChart;
