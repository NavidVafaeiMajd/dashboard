import Chart from "react-apexcharts";

const TicketPriorityChart = () => {
    return (
        <>
                    <div className="text-left! desk-cart p-5">
                <Chart
                            type="pie"
                            series={[0, 1 , 2,1]}
                            options={{
                                chart: {
                                    fontFamily: 'Tahoma',
                                    
                                },
                                labels: ["کم" , "متوسط" , "زیاد" , "خیلی زیاد"],
                                title: {
                                    text: 'اولویت درخواست پشتیبانی',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'Tahoma',
                                        
                                    }
                                 },
                                colors: ["#ffa21d", "#ffb142" , "#ffc066" , "#ffcf8b"],
                                  legend: {
                                      horizontalAlign: 'center',
                                      position: 'right'

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
 
export default TicketPriorityChart;