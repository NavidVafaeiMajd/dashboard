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

const EmployeDetailse = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();

  return (
    <>
      <Tabs defaultValue="basicInfo">
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
          <BasicInfo/>
        </TabsContent>
        <TabsContent value="personalInfo">
          <Personalnfo/>
        </TabsContent>
        <TabsContent value="profImg">
          <ProfileImg/>
        </TabsContent>
        <TabsContent value="accountInfo">
          <AccountInfo/>
        </TabsContent>

      </Tabs>
    </>
  );
};

export default EmployeDetailse;
