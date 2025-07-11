import Chart from "react-apexcharts";

const StaffPositionChart = () => {
    return (
        <>
                <div className="text-left! desk-cart p-5">
                        <Chart
                            type="donut"
                            series={[4, 2, 1]}
                            options={{
                                chart: {
                                    fontFamily: 'Tahoma',
                                },
                                
                                labels: ["رئیس واحد" , "سرپرست واحد" , "عملیات"],
                                title: {
                                    text: ' نمودار سمت کارکنان',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'Tahoma',
                                        
                                    }
                                 },
                                colors: ["#662e9b", "#f86624", "#f9c80e"],
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
 
export default StaffPositionChart;