import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from 'lucide-react';
import AIinputBox from "@/components/custom/AIInputBox";

function CreateNew() {
  return (
    <div className="px-10 md:px-20 lg:px-64 xl:px-72 mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-3xl text-primary">CREATE NEW EMAIL TEMPLATE</h2>
        <p className="text-lg text-gray-400">
          {" "}
          Effortlessly design and customize professional Ai-power email
          templates with ease
        </p>
        <Tabs defaultValue="AI" className="w-[500px] mt-10">
          <TabsList>
            <TabsTrigger value="AI">Create with AI <Sparkles className="h-5 w-5 ml-2" /></TabsTrigger>
            <TabsTrigger value="SCRATCH">Start from Scratch</TabsTrigger>
          </TabsList>
          <TabsContent value="AI">
            <AIinputBox />
          </TabsContent>
          <TabsContent value="SCRATCH">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
