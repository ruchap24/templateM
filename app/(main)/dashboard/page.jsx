"use client"
import { useUserDetail } from '@/app/provider'
import EmailTemplateList from '@/components/custom/EmailTemplateList'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

export const dynamic = 'force-dynamic';

function Dashboard() {
  const { userDetail, setUserDetail } = useUserDetail();

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-28 xl:px-40 2xl:px-56 mt-8 sm:mt-12 md:mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">Welcome back, {userDetail?.name}</h2>
          <Link href="/dashboard/create" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
              + Create New Email Template
            </Button>
          </Link>
        </div>
        <EmailTemplateList />
      </div>
    </div>
  )
}

export default Dashboard;

