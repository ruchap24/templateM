"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles } from 'lucide-react';
import AIinputBox from "@/components/custom/AIInputBox";

export const dynamic = 'force-dynamic';

function CreateNew() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-64 2xl:px-72 mt-8 sm:mt-12 md:mt-20 pb-10">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-2xl sm:text-3xl text-purple-700 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent px-4">
          Create New Email Template
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 mt-4">
          Design professional, responsive email templates with AI-powered tools. 
          Build beautiful campaigns that engage your audience and drive results.
        </p>
        <Tabs defaultValue="AI" className="w-full max-w-[500px] mt-6 sm:mt-10 px-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="AI" className="text-xs sm:text-sm">
              <span className="hidden sm:inline">Create with AI</span>
              <span className="sm:hidden">AI</span>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" />
            </TabsTrigger>
            <TabsTrigger value="SCRATCH" className="text-xs sm:text-sm">
              <span className="hidden sm:inline">Start from Scratch</span>
              <span className="sm:hidden">Scratch</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="AI">
            <AIinputBox />
          </TabsContent>
          <TabsContent value="SCRATCH">
            <div className="mt-5 p-4 sm:p-6 border border-slate-200 rounded-lg bg-slate-50">
              <p className="text-sm sm:text-base text-slate-600 text-center">
                Start building your template from scratch by dragging and dropping elements in the editor.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
