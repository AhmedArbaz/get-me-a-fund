"use client"
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
//ya same use kar rahy hain redirect karin gay ager banda logout ho jay to dashboard valy page say redirect ho jay 

const dashboard = () => {
  const {data: session} = useSession()
  // So ya condition bana di kay ager login nahi ho gay to login page redirect ho jay ga jasay logout karo gay to 
if (!session) {
  const router = useRouter()
  router.push('/Login')
}

  return (
    <div>
      Dashboard
    </div>
  )
}

export default dashboard
