"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'  
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useEmailTemplate, useScreenSize } from '@/app/provider'
import CheckCode from './CheckCode'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

function EditorHeader({viewHTMLCode, showElementsSidebar, showSettings, setShowElementsSidebar, setShowSettings}) {
  const { screenSize, setScreenSize } = useScreenSize();
  const router = useRouter();
  const { templateId } = useParams();
  const updateEmailTemplate = useMutation(api.emailTemplate.updateTemplateDesign);
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const sanitizeData = (data) => {
    if (data === null || data === undefined) {
      return data;
    }
    
    if (Array.isArray(data)) {
      return data.map(item => sanitizeData(item));
    }
    
    if (typeof data === 'object') {
      if (data.$$typeof || typeof data === 'function') {
        return null;
      }
      
      const sanitized = {};
      for (const key in data) {
        if (key.startsWith('$')) {
          continue;
        }
        
        const value = sanitizeData(data[key]);
        if (value !== null && value !== undefined) {
          sanitized[key] = value;
        }
      }
      return sanitized;
    }
    
    return data;
  };

  const onSaveTemplate = async() => {
    if (!templateId) {
      toast.error('Template ID is missing');
      return;
    }
    try {
      const sanitizedDesign = sanitizeData(emailTemplate);
      
      await updateEmailTemplate({
        tid: templateId,
        design: sanitizedDesign
      });
      toast('Email Template Saved Successfully!')
    } catch(error) {
      console.error("Error saving template:", error);
      toast('Failed to save template')
    }
  }
  
  return (
    <div className='p-2 sm:p-4 shadow-sm flex flex-col gap-3 dark:bg-gray-900 dark:border-b dark:border-gray-800'>
      {/* Top Row: Logo and Action Buttons */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
        <Link href="/" className="flex-shrink-0">
          <Image 
            src='/logo.svg' 
            alt='logo' 
            width={120} 
            height={112}
            className="w-24 sm:w-40"
            priority 
          />
        </Link>
        
        {/* Desktop/Mobile View + Code/Diff/Test/Save Buttons - Same Line */}
        <div className='flex gap-2 sm:gap-3 flex-wrap items-center w-full sm:w-auto justify-end sm:justify-start'>
          {/* Desktop/Mobile View Buttons */}
          <div className='flex gap-2 sm:gap-3'>
            <Button 
              variant='ghost' 
              size="sm"
              onClick={() => setScreenSize('desktop')} 
              className={`text-xs sm:text-sm ${screenSize === 'desktop' ? 'bg-purple-100 text-primary dark:bg-purple-900' : 'dark:text-gray-300'}`}
            >
              <Monitor className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Desktop</span>
            </Button>
            <Button 
              variant='ghost' 
              size="sm"
              onClick={() => setScreenSize('mobile')} 
              className={`text-xs sm:text-sm ${screenSize === 'mobile' ? 'bg-purple-100 text-primary dark:bg-purple-900' : 'dark:text-gray-300'}`}
            >
              <Smartphone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Mobile</span>
            </Button>
          </div>

          {/* Code, Diff, Test Email, Save Buttons */}
          <div className='flex gap-2 sm:gap-3'>
            <Button 
              variant='ghost' 
              size="sm"
              className="hover:text-primary dark:hover:text-purple-400"
              onClick={() => viewHTMLCode(true)}
            >
              <Code className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant='default' 
              size="sm"
              onClick={() => router.push('/checkcode')}
              className="dark:bg-purple-800 dark:hover:bg-purple-700 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Check Diff</span>
              <span className="sm:hidden">Diff</span>
            </Button>
            <Button 
              variant='outline'
              size="sm"
              className="dark:border-purple-700 dark:text-gray-200 text-xs sm:text-sm"
            >
              <span className="hidden sm:inline">Send Test Email</span>
              <span className="sm:hidden">Test</span>
            </Button>
            <Button 
              variant='default'
              size="sm"
              className="dark:bg-purple-800 dark:hover:bg-purple-700 text-xs sm:text-sm"
              onClick={onSaveTemplate}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Row: Mobile Panel Toggle Buttons - Separate Line */}
      <div className='lg:hidden flex gap-2 justify-end'>
        {!showSettings && (
          <button
            onClick={() => {
              setShowElementsSidebar(!showElementsSidebar);
              if (showSettings) setShowSettings(false);
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md shadow-lg text-sm font-medium transition-colors"
          >
            Elements
          </button>
        )}
        {!showElementsSidebar && (
          <button
            onClick={() => {
              setShowSettings(!showSettings);
              if (showElementsSidebar) setShowElementsSidebar(false);
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-md shadow-lg text-sm font-medium transition-colors"
          >
            Settings
          </button>
        )}
      </div>
    </div>
  )
}

export default EditorHeader