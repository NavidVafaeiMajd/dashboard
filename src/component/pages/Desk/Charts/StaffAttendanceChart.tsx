import Chart from "react-apexcharts";
import { LuUsersRound } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoIosArrowRoundUp ,IoIosArrowRoundDown  } from "react-icons/io";

const StaffAttendanceChart = () => {
    return (
        <>
            <div className="text-left! desk-cart p-5 grid grid-cols-2">
                <div>
                    <h2>حضور کارکنان  <span className="mx-3">۲۰ تیر, ۱۴۰۴</span></h2>
                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex gap-2">
                            <LuUsersRound className="w-5 h-5 text-blue-500" />
                             مجموع کارکنان
                        </div>
                        <div className="flex gap-2">
                            <FiUser className="w-5 h-5 text-green-500" />
                            حاضر 
                            <IoIosArrowRoundUp className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="flex gap-2">
                            <FiUser className="w-5 h-5 text-red-500" />
                            غایب 
                            <IoIosArrowRoundDown className="w-5 h-5 text-red-500" />

                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    <Chart
                        height={200}
                        width={200}
                        type="bar"
                        series={[
                            {
                            name: 'تعداد کارکنان',
                            data: [2]
                            },
                            {
                            name: ' حضور کارکنان',
                            data: [2]
                            }
                        ]}
                        options={{
                        chart: {
                            fontFamily: 'Tahoma',
                            toolbar: {
                                show: false 
                            }
                        },
                        
                        colors: ['#199afb', '#00e396'],
                        plotOptions: {
                        bar: {
                            columnWidth: '40%', // ستون‌ها باریک‌تر می‌شن → فاصله میفته
                            distributed: false // هر سری یک رنگ داشته باشه
                        }
                        },
                        xaxis: {
                        categories: [''], // فقط یه دسته بی‌نام که دوتا ستون کنارش رسم میشه
                        labels: {
                            show: false // مخفی کردن برچسب پایین
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                        },
                        yaxis: {
                        show: false // مخفی کردن محور عمودی
                        },
                        grid: {
                        show: false // مخفی کردن خطوط پس‌زمینه
                        },
                        dataLabels: {
                        enabled: false // عدم نمایش اعداد روی ستون
                        },
                        legend: {
                        show: false // عدم نمایش legend
                        },
                        title: {
                        text: '',
                        },

                                            
                        
                    }}
                />
                </div>
            </div>             
        </>
    );
}
 
export default StaffAttendanceChart;