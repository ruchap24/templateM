"use client"
import { UserDetail } from '@/app/provider'
import EmailTemplateList from '@/components/custom/EmailTemplateList'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

function Dashboard() {
  const { userDetail, setUserDetail } = UserDetail();

  return (
    <div>
      {/* <Header/> */}
      <div className="px-10 md:px-28 lg:px-40 xl:px-56 mt-16">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Hello, {userDetail?.name}</h2>
          <Link href="/dashboard/create">
            <Button>
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