import { useParams, useNavigate } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { IoPersonAddSharp } from "react-icons/io5";

const ClientInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Tabs defaultValue="Contract">
        <TabsList className="flex flex-col">
          <div>
            <div className="flex justify-between p-5 items-center">
              <div className="flex gap-3">
                <div>
                  <img
                    className="w-25"
                    src="https://trust.jaferi.ir/public/uploads/users/20240801_221626.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <span>اکبر محمدی</span>
                  <span className="text-gray-400">رئیس واحد</span>
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
                  مدیر
                </span>
              </div>
              <div className="h-[1px] bg-gray-200 my-5"></div>
              <div className="flex justify-between">
                <span className="flex gap-3">
                  <MdOutlineMail className="w-7! h-7!" />
                  ایمیل
                </span>
                <span>a@g.com</span>
              </div>
            </div>
          </div>

          <TabsTrigger value="Contract">
            <span className="flex gap-2 justify-center items-center">
              <CiLock className="w-7! h-7!" />
              قرارداد
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
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
          <TabsTrigger value="changePass">
            <span className="flex gap-2 justify-center items-center">
              <MdOutlinePassword className="w-7! h-7!" />
              تغییر رمز عبور
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Contract">
          <p>it is client 1</p>
        </TabsContent>
        <TabsContent value="basicInfo">
          <p>Settings content goes here</p>
        </TabsContent>
        <TabsContent value="personalInfo">
          <p>Settings content goes here</p>
        </TabsContent>
        <TabsContent value="profImg">
          <p>Settings content goes here</p>
        </TabsContent>
        <TabsContent value="accountInfo">
          <p>Settings content goes here</p>
        </TabsContent>
        <TabsContent value="changePass">
          <p>Settings content goes here</p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ClientInfo;
