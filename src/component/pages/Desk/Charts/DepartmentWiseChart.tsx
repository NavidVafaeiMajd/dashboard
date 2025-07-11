import Chart from "react-apexcharts";

const DepartmentWiseChart = () => {
    return (
        <>
            <div className="text-left! desk-cart p-5">
                <Chart
                            type="donut"
                            series={[12, 1, 3]}
                            options={{
                                chart: {
                                    fontFamily: 'Tahoma',
                                    
                                },
                                
                                labels: ["فناوری اطلاعات" , "ستاد مرکزی" , "عملیات"],
                                title: {
                                    text: 'نمودار واحد سازمانی',
                                    align: 'right',
                                    style: {
                                        fontFamily: 'Tahoma',
                                        
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