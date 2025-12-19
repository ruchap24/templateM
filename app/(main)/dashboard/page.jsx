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
      {/* <Header/> */}
      <div className="px-10 md:px-28 lg:px-40 xl:px-56 mt-16">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl text-slate-900">Welcome back, {userDetail?.name}</h2>
          <Link href="/dashboard/create">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md hover:shadow-lg transition-all">
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

