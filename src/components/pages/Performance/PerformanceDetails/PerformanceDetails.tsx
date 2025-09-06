import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";

const PerformanceDetails = () => {
   return (
      <div className="flex flex-col md:flex-row gap-x-5 items-start text-lg justify-between">
         <div className="bg-white flex flex-col items-center justify-center shadow w-120 px-5 py-4">
            <div className="w-full py-4 mb-5 border-b-2 border-pink-400">
               <h2 className="text-xl">جزییات عملکرد</h2>
            </div>

            <div className="flex flex-col w-full gap-y-2">
               <div className="flex border-b py-2 border-t justify-between w-full">
                  <h3>عنوان:</h3>
                  <h3>23156151</h3>
               </div>
               <div className="flex border-b py-2 justify-between w-full">
                  <h3>سمت سازمانی:</h3>
                  <h3>سرپرست واحد</h3>
               </div>
               <div className="flex border-b py-2 justify-between w-full">
                  <h3>اضافه شده توسط:</h3>
                  <h3>jaferi jaferi</h3>
               </div>
               <div className="flex border-b py-2 justify-between w-full">
                  <h3>تاریخ ایجاد:</h3>
                  <h3>
                     {new Intl.DateTimeFormat("fa-ir", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                     }).format(new Date())}
                  </h3>
               </div>
               <div className="mx-auto">
                  <StarRating star={0.8} />
               </div>
            </div>
         </div>
         <div className="w-full space-y-4">
            <div className="flex w-full bg-white gap-x-5 py-8 px-4">
               <Button
                  size={"lg"}
                  className="rounded"
               >
                  مرور کلی
               </Button>
               <Button
                  size={"lg"}
                  className="rounded"
               >
                  ویرایش
               </Button>
            </div>
            <div className="w-full bg-white ">
               <div className="w-full p-4 mb-5 border-b-2 border-pink-400">
                  <h2 className="text-xl">جزییات عملکرد</h2>
               </div>

               <div className="flex gap-x-5 px-5 py-2 flex-col md:flex-row md:justify-between">
                  <div className="w-full ">
                     <div className="bg-gray-300 font-medium w-full px-2 py-4">
                        <span className="text-lg">شایستگی های فنی</span>
                     </div>
                     <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                        <span className="w-full text-lg">نشانگر</span>
                        <span className="w-full text-lg">تنظیم اندیکاتور</span>
                     </div>

                     <div className="flex justify-between items-center">
                        <span className="text-lg w-full">تست فنی 1</span>
                        <StarRating star={5} />
                     </div>
                  </div>
                  <div className="w-full">
                     <div className="bg-gray-300 font-medium w-full px-2 py-4">
                        <span className="text-lg">شایستگی های سازمانی</span>
                     </div>
                     <div className="bg-green-200 px-2 py-4 w-full flex justify-between">
                        <span className="w-full text-lg">نشانگر</span>
                        <span className="w-full text-lg">تنظیم اندیکاتور</span>
                     </div>

                     <div className="flex justify-between items-center">
                        <span className="text-lg w-full">تست سازمانی 1</span>
                        <StarRating star={2} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default PerformanceDetails;
