import { IoDocumentTextOutline } from "react-icons/io5";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ProjectsListTable from "./Projects/ProjectsList";
import BasicInfo from "./BasicInfo/BasicInfo";
import { FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ClientPage = () => {
  const { id } = useParams();

  const useGetEmployee = async (): Promise<any> => {
    const res = await fetch(`http://localhost:8000/api/clients/${id}`);
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
    queryKey: ["clientsDetailes", id],
    queryFn: useGetEmployee,
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
                <div className="flex flex-col">
                  <span>
                    {queryData.first_name}
                    {queryData.last_name}{" "}
                  </span>
                </div>
              </div>
              <div>
                {queryData?.status === "غیرفعال"
                  ? <span className="bg-red-200 text-red-500 py-1 px-4 rounded-sm text-sm!">غیرفعال</span>
                  : queryData?.status === "فعال"
                  ? <span className="bg-greenLight text-greenDark py-1 px-4 rounded-sm text-sm!">فعال</span>
                    : <span className="bg-amber-200 text-yellow-600 py-1 px-4 rounded-sm text-sm!">تعیین نشده</span>
                }
                
              </div>
            </div>
            <div className="p-5 bg-white">
              <div className="flex justify-between">
                <span className="flex gap-3">
                  <FaPhone className="w-7! h-7!" />
                  شماره
                </span>
                <span>{queryData.phone}</span>
              </div>
              <div className="h-[1px] bg-gray-200 my-5"></div>
              <div className="flex justify-between">
                <span className="flex gap-3">
                  <MdOutlineMail className="w-7! h-7!" />
                  ایمیل
                </span>
                <span>{queryData.gmail}</span>
              </div>
            </div>
          </div>
          <TabsTrigger value="basicInfo">
            <span className="flex gap-2 justify-center items-center">
              <IoDocumentTextOutline className="w-7! h-7!" />
              اطلاعات شخصی
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="accountInfo">
            <span className="flex gap-2 justify-center items-center">
              <IoMdInformationCircleOutline className="w-7! h-7!" />
              پروژه ها
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basicInfo">
          <BasicInfo queryData ={queryData} />
        </TabsContent>
        <TabsContent value="accountInfo">
          <ProjectsListTable />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ClientPage;
