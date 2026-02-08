import TeamPage from '@/app/pages/Team'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return (
    <TeamPage/>
  )
}

export default page

export const metadata: Metadata = {
  title: "Team",
  description: "The Faces Behind the Phenomenon: Presenting you the JECLAT 2K26 Core Team!",
};