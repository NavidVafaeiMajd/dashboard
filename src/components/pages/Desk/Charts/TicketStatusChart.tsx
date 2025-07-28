import Chart from "react-apexcharts";

const TicketStatusChart = () => {
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
                                    fontFamily: 'myFirstFont',
                                    
                                },
                                labels: ["باز کردن" , " بسته شدن" ],
                                title: {
                                    text: 'وضعیت درخواست پشتیبانی',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'myFirstFont',
                                    }
                                 },
                                colors: ["#199afb", "#00e396"],
                                  legend: {
                                      horizontalAlign: 'center',
                                      position: 'right'
                                },
                                fill: {
                                type: 'gradient',
                                gradient: {
                                    shade: 'light',
                                    type: 'horizontal', // یا 'vertical'
                                    gradientToColors: [
                                        '#fff',        // بخش اول
                                        "#000",        // بخش دوم
                                    ],
                                    stops: [0, 100]
                                },
                                },
                                 responsive: [
                                    {
                                        breakpoint: 900, // هر عرضی کمتر از این مقدار
                                        options: {
                                        legend: {
                                            position: 'bottom'
                                        }
                                        }
                                    }
                                ],
                                
                                
                            }}
                        />
                    </div>             
        </>
    );
}
 
export default TicketStatusChart;