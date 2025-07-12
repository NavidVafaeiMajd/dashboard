import Chart from "react-apexcharts";

const DepartmentWiseChart = () => {
    return (
        <>
            <div className="text-left! desk-cart p-1 md:p-10">
                <Chart
                            type="donut"
                            series={[12, 1, 3]}
                            options={{
                                chart: {
                                    fontFamily: 'myFirstFont',
                                    
                                },
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontFamily: "myFirstFont",
                                        fontWeight: "bold"
                                    }
                                    },
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            labels: {
                                                show: true, 
                                                total: {
                                                    show: true,
                                                    label: 'جمع کل',
                                                    formatter: function (w) {
                                                        return w.globals.seriesTotals.reduce((a:number, b:number) => {
                                                            return a + b
                                                        }, 0).toLocaleString()
                                                    }
                                                }
                                          }
                                      }
                                  }  
                                },
                                
                                labels: ["فناوری اطلاعات" , "ستاد مرکزی" , "عملیات"],
                                title: {
                                    text: 'نمودار واحد سازمانی',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'myFirstFont',
                                        
                                    }
                                 },
                                colors: ["#3580ac", "#f86624", "#ea3546"],
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
 
export default DepartmentWiseChart;