"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from 'lucide-react';
import AIinputBox from "@/components/custom/AIInputBox";

export const dynamic = 'force-dynamic';

function CreateNew() {
  return (
    <div className="px-10 md:px-20 lg:px-64 xl:px-72 mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-3xl text-purple-700 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">Create New Email Template</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Design professional, responsive email templates with AI-powered tools. 
          Build beautiful campaigns that engage your audience and drive results.
        </p>
        <Tabs defaultValue="AI" className="w-[500px] mt-10">
          <TabsList>
            <TabsTrigger value="AI">Create with AI <Sparkles className="h-5 w-5 ml-2" /></TabsTrigger>
            <TabsTrigger value="SCRATCH">Start from Scratch</TabsTrigger>
          </TabsList>
          <TabsContent value="AI">
            <AIinputBox />
          </TabsContent>
          <TabsContent value="SCRATCH">
            <div className="mt-5 p-6 border border-slate-200 rounded-lg bg-slate-50">
              <p className="text-slate-600 text-center">Start building your template from scratch by dragging and dropping elements in the editor.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
