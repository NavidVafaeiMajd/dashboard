import Chart from "react-apexcharts";

const TicketStatusChart = () => {
    return (
        <>
                    <div className="text-left! desk-cart p-5">
                <Chart
                            type="donut"
                            series={[4, 0]}
                            options={{
                                chart: {
                                    fontFamily: 'Tahoma',
                                    
                                },
                                
                                labels: ["باز کردن" , " بسته شدن" ],
                                title: {
                                    text: 'وضعیت درخواست پشتیبانی',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'Tahoma',
                                        
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
                                }
                                
                                
                            }}
                        />
                    </div>             
        </>
    );
}
 
export default TicketStatusChart;