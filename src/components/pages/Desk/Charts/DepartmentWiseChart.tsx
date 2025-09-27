import Chart from "react-apexcharts";

interface Department {
    id: number;
    name: string;
    employee_count: number;
}
const DepartmentWiseChart = ({ department }: { department:Department[] }) => {
    
  return (
    <>
      <div className="text-left! desk-cart p-1 md:p-10">
        <Chart
          type="donut"
          series={department?.map((item) => item.employee_count) ?? []}
          options={{
            chart: {
              fontFamily: "myFirstFont",
            },
            dataLabels: {
              enabled: true,
              style: {
                fontFamily: "myFirstFont",
                fontWeight: "bold",
              },
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

            labels: department?.map((item) => item.name) ?? [],
            title: {
              text: "نمودار واحد سازمانی",
              align: "right",
              style: {
                fontFamily: "myFirstFont",
              },
            },
            colors: ["#3580ac", "#f86624", "#ea3546"],
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

export default DepartmentWiseChart;
