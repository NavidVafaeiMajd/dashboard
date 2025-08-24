import Chart from "react-apexcharts";

const LeaveStatus = () => {
  return (
    <>
      <div className="text-left! desk-cart p-1 md:p-5">
        <Chart
          type="donut"
          series={[4, 0]}
          options={{
            dataLabels: {
              enabled: true,
            },
            chart: {
              fontFamily: "myFirstFont",
            },
            labels: [" تایید شده", "  در حال بررسی" , "رد شده"],
            title: {
              text: " وضعیت مرخصی ",
              align: "right",
              style: {
                fontFamily: "myFirstFont",
              },
            },
            colors: ["#64D999", "#86E1AF" ,"#A7E9C5"],
            legend: {
              horizontalAlign: "center",
              position: "right",
            },
            fill: {
              type: "color",

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

export default LeaveStatus;
