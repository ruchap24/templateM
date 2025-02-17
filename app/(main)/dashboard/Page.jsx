"use client"
import { useUserDetail } from '@/app/provider'
import Header from '@/components/custom/Header'
import React from 'react'

function Dashboard() {
    const { userDetail, setUserDetail } = useUserDetail();
  return (
    <div>
        <Header/>
        <div>
            <div>
                <h2>Hello,{userDetail?.name}</h2>
            </div>
        </div>
    </div>
  )
}

export default Dashboard