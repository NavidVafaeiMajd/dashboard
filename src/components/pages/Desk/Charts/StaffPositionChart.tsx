import { useDepartments } from "@/hook/useDepartments";
import { useDesignationsts } from "@/hook/useDesignationsts";
import Chart from "react-apexcharts";



const StaffPositionChart = () => {
    const { data: designationsts, isPending: designationstsLoading } = useDesignationsts();

  // استخراج برچسب‌ها
  const labels =
  designationsts?.data?.map(
      (dept) => dept.name || dept.title || dept.department_name
    ) || [];

  return (
    <>
      <div className="text-left! desk-cart p-5 md:p-10">
        <Chart
          type="donut"
          series={[4, 2, 1]}
          options={{
            chart: {
              fontFamily: "myFirstFont",
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      label: "جمع کل",
                      formatter: function (w) {
                        return w.globals.seriesTotals
                          .reduce((a: number, b: number) => {
                            return a + b;
                          }, 0)
                          .toLocaleString();
                      },
                    },
                  },
                },
              },
            },

            labels:labels,

            title: {
              text: " نمودار سمت کارکنان",
              align: "right",
              style: {
                fontFamily: "myFirstFont",
              },
            },
            colors: ["#662e9b", "#f86624", "#f9c80e"],
            legend: {
              horizontalAlign: "center",
              position: "right",
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
    </>
  );
};

export default StaffPositionChart;
