import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const EmployeDetailse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>our user id is : {id}</h1>
      <Tabs defaultValue="user">
        <TabsList className="flex flex-col">
          <TabsTrigger value="user">User</TabsTrigger>
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
