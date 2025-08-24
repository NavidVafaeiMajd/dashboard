import Chart from "react-apexcharts";

const LeaveTypeStatus = () => {
  return (
    <>
      <div className="text-left! desk-cart p-1 md:p-5">
        <Chart
          type="donut"
          series={[4]}
          options={{
            dataLabels: {
              enabled: true,
            },
            chart: {
              fontFamily: "myFirstFont",
            },
            labels: [" استعلاجی"],
            title: {
              text: " وضعیت نوع مرخصی ",
              align: "right",
              style: {
                fontFamily: "myFirstFont",
              },
            },
            colors: ["#255AEE"],
            legend: {
              horizontalAlign: "center",
              position: "right",
            },
            fill: {
              type: "color",

            },
            responsive: [
              {
                breakpoint: 900, 
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

export default LeaveTypeStatus;
