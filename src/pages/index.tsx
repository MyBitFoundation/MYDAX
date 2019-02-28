import React from 'react'
import { withSiteData } from 'react-static'

import Hero from '@components/Hero'
import Features from '@components/Features'
import BenefitsCentralized from '@components/BenefitsCentralized'
import Infographs from '@components/Infographs/Infographs'
import BenefitsDecentralized from '@components/BenefitsDecentralized'
import Footer from '@components/Footer/Footer'
import UpdatesForm from '@components/UpdatesForm'

export const HomeComponent = () => (
  <>
    <Hero />
    <Features />
    <BenefitsCentralized />
    <Infographs />
    <BenefitsDecentralized />
    <UpdatesForm />
    <Footer />
  </>
)

export default withSiteData(HomeComponent)
