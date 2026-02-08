import AboutPage from '@/app/pages/About'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return (
    <AboutPage/>
  )
}

export default page


export const metadata: Metadata = {
  title: "About",
  description: "Learn more about the largest cultural fest of North Bengal.",
};