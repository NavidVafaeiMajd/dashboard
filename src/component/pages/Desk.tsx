
import Chart from 'react-apexcharts'
import FeedCart from "./Desk/FeedCard/FeedCard";

const Desk = () => {
    return (
    <>
    <div className="overflow-auto min-h-200 py-10 px-5">
                <FeedCart/>
        <div className="grid grid-cols-2 mt-5 gap-5">
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

                                    }
                                
                            }}
                        />
                    </div> 
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

                                    }
                                
                            }}
                        />
                    </div> 
        </div>
    </div>
    </>);
}
 
export default Desk;