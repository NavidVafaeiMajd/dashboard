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
                                
                                
                            }}
                        />
                    </div>             
        </>
    );
}
 
export default TicketPriorityChart;