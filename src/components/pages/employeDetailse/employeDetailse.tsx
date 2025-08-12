import { useParams, useNavigate } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IoIosArrowBack } from "react-icons/io";

const EmployeDetailse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Tabs defaultValue="user">
        <TabsList className="flex flex-col">
                  <h1>our user id is : {id}</h1>
                  <div>
                      
                  </div>

          <TabsTrigger value="user">
            <span className="flex gap-2 justify-center items-center">
              <IoDocumentTextOutline className="w-7! h-7!"/>
              User
            </span>
            <span>
              <IoIosArrowBack className="w-7! h-7!" />
            </span>
          </TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <p>User content goes here</p>
        </TabsContent>
        <TabsContent value="settings">
          <p>Settings content goes here</p>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default EmployeDetailse;
