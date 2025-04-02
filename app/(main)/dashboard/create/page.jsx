import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function CreateNew() {
  return (
    <div className="px-10 md:px-20 lg:px-44 xl:px-56 mt-20">
      <div>
        <h2 className="font-bold text-3xl">CREATE NEW EMAIL TEMPLATE</h2>
        <p className="text-lg text-gray-400">
          {" "}
          Effortlessly design and customize professional Ai-power email
          templates with ease
        </p>
        <Tabs defaultValue="account" className="w-[500px] mt-10">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
