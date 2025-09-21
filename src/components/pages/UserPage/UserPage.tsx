import { IoDocumentTextOutline } from "react-icons/io5";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";
import BasicInfo from "./BasicInfo/BasicInfo";
import AccountInfo from "./AccountInfo/AccountInfo";
import Personalnfo from "./Personalnfo/Personalnfo";
import ProfileImg from "./ProfileImg/ProfileImg";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HiUserCircle } from "react-icons/hi2";

const EmployeDetailse = () => {
  const { id } = useParams();

  const useGetEmployee = async (): Promise<any> => {
    const res = await fetch(`http://localhost:8000/api/employees/${id}`);
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
    queryKey: ["employeesDetailse", id],
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
                <div>
                  {queryData?.image ? (
                    <img className="w-25" src={`http://localhost:8000/${queryData?.image}`} alt="" />
                  ) : (
                    <HiUserCircle className="w-20 h-25"/>
                  )}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span>
                    {queryData?.firstName} {queryData?.lastName}
                  </span>
                  <span className="text-gray-400">
                    {queryData?.designation}{" "}
                  </span>
                </div>
              </div>
              <div>
                <span className="bg-greenLight text-greenDark py-1 px-4 rounded-sm text-sm!">
                  {queryData?.position}
                </span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <div>
                <span className="flex gap-3">
                  <FaRegUser className="w-7! h-7!" />
                  مدیر
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
          <TabsTrigger value="personalInfo">
            <span className="flex gap-2 justify-center items-center">
              <IoPersonAddSharp className="w-7! h-7!" />
              اطلاعات شخصی
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="profImg">
            <span className="flex gap-2 justify-center items-center">
              <CiImageOn className="w-7! h-7!" />
              تصویر پروفایل
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="accountInfo">
            <span className="flex gap-2 justify-center items-center">
              <IoMdInformationCircleOutline className="w-7! h-7!" />
              اطلاعات حساب
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="basicInfo">
          <BasicInfo queryData={queryData} />
        </TabsContent>
        <TabsContent value="personalInfo">
          <Personalnfo queryData={queryData} />
        </TabsContent>
        <TabsContent value="profImg">
          <ProfileImg queryData={queryData} />
        </TabsContent>
        <TabsContent value="accountInfo">
          <AccountInfo queryData={queryData?.salary} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default EmployeDetailse;
