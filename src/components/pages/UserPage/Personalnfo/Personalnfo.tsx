import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FiUser } from "react-icons/fi";
import Biography from "./Biography/Biography";

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex gap-2 border-b-red-500 border-b-2 p-3 w-full!">
        <span>
          <FiUser className="w-7 h-7" />
        </span>
        <span> اطلاعات اولیه</span>
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
          <Biography />
        </TabsContent>
        <TabsContent value="socialProfile" className="p-5">
          {/* محتوا برای پروفایل اجتماعی */}--
        </TabsContent>
        <TabsContent value="bankAccount" className="p-5">
          {/* محتوا برای حساب بانکی */}---
        </TabsContent>
        <TabsContent value="emergencyContact" className="p-5">
          {/* محتوا برای تماس اضطراری */}----
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalInfo;
