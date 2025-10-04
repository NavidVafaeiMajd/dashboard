import { IoDocumentTextOutline } from "react-icons/io5";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import BasicInfo from "./BasicInfo/BasicInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HiUserCircle } from "react-icons/hi2";

const MarketingStaffDetails = () => {
  const { id } = useParams();

  const useGetMarketingStaff = async (): Promise<any> => {
    const res = await fetch(`http://localhost:8000/api/marketing-staff/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const {
    data: queryData,
    isLoading,
    isError,
    error,
  } = useQuery<any>({
    queryKey: ["marketing-staff-details", id],
    queryFn: useGetMarketingStaff,
  });

  if (isLoading) return <div className="p-4">در حال بارگذاری...</div>;
  if (isError)
    return (
      <div className="p-4 text-red-600">خطا: {(error as Error)?.message}</div>
    );

  return (
    <>
      <Tabs defaultValue="basicInfo">
        <TabsList className="flex flex-col">
          <div>
            <div className="flex justify-between p-5 items-center">
              <div className="flex gap-3">
                <div>
                  {queryData?.image ? (
                    <img className="w-25" src={`http://localhost:8000/${queryData?.image}`} alt="" />
                  ) : (
                    <HiUserCircle className="w-20 h-25"/>
                  )}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span>
                    {queryData?.first_name} {queryData?.last_name}
                  </span>
                  <span className="text-gray-400">
                    پرسنل بازاریابی
                  </span>
                </div>
              </div>
              <div>
                <span className="bg-greenLight text-greenDark py-1 px-4 rounded-sm text-sm!">
                  فعال
                </span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <div>
                <span className="flex gap-3">
                  <FaRegUser className="w-7! h-7!" />
                  پرسنل بازاریابی
                </span>
              </div>
              <div className="h-[1px] bg-gray-200 my-5"></div>
              <div className="flex justify-between">
                <span className="flex gap-3">
                  <MdOutlineMail className="w-7! h-7!" />
                  ایمیل
                </span>
                <span>{queryData?.email}</span>
              </div>
            </div>
          </div>
          <TabsTrigger value="basicInfo">
            <span className="flex gap-2 justify-center items-center">
              <IoDocumentTextOutline className="w-7! h-7!" />
              اطلاعات اولیه
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>

        </TabsList>
        <TabsContent value="basicInfo">
          <BasicInfo queryData={queryData} />
        </TabsContent>

      </Tabs>
    </>
  );
};

export default MarketingStaffDetails;
