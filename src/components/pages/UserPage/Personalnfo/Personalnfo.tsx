import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Personalnfo = () => {
  return (
    <>
      <div>
        <Tabs className="flex-col! gap-0">
          <TabsList className=" flex! flex-row! w-full!">
            <TabsTrigger value="basicInfo" className="justify-center"> بیوگرافی </TabsTrigger>
            <TabsTrigger value="basicInfo1" className="justify-center">پروفایل اجتماعی </TabsTrigger>
            <TabsTrigger value="basicInfo2" className="justify-center">حساب بانکی </TabsTrigger>
            <TabsTrigger value="basicInfo3" className="justify-center">تماس اضطراری </TabsTrigger>
          </TabsList>
          <TabsContent value="basicInfo">--</TabsContent>
          <TabsContent value="basicInfo1">---</TabsContent>
          <TabsContent value="basicInfo2">----</TabsContent>
          <TabsContent value="basicInfo3">-----</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Personalnfo;
