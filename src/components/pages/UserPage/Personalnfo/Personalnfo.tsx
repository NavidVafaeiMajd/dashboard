import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FiUser } from "react-icons/fi";
import Biography from "./Biography/Biography";
import SochialMedia from "./SochialMedia/SochialMedia";
import BankAccountForm from "./Bank/Bank";
import EmergencyCall from "./EmergencyCall/EmergencyCall";

const PersonalInfo = ({ queryData }: { queryData: any }) => {
  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3 w-full!">
        <span>
          <FiUser className="w-7 h-7" />
        </span>
        <span> اطلاعات شخصی</span>
      </div>
      <Tabs className="flex-col! gap-0" defaultValue="biography">
        <TabsList className="flex! flex-row! w-full!">
          <TabsTrigger value="biography" className="justify-center">
            بیوگرافی
          </TabsTrigger>
          <TabsTrigger value="socialProfile" className="justify-center">
            پروفایل اجتماعی
          </TabsTrigger>
          <TabsTrigger value="bankAccount" className="justify-center">
            حساب بانکی
          </TabsTrigger>
          <TabsTrigger value="emergencyContact" className="justify-center">
            تماس اضطراری
          </TabsTrigger>
        </TabsList>

        <TabsContent value="biography" className="p-5 w-full!">
          <Biography queryData={queryData?.biography} />
        </TabsContent>
        <TabsContent value="socialProfile" className="p-5 w-full!">
          <SochialMedia queryData={queryData?.social_profile}/>
        </TabsContent>
        <TabsContent value="bankAccount" className="p-5 w-full!">
          <BankAccountForm queryData={queryData?.bank_account}/>
        </TabsContent>
        <TabsContent value="emergencyContact" className="p-5 w-full!">
          <EmergencyCall queryData={queryData?.emergency_contact}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalInfo;
