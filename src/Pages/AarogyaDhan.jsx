import React from 'react'
import AarogyaDhanNavbar from '../Component/AarogyaDhanNavbar'
import GiveEveryMonth from '../Component/GiveEveryMonth'
import CrowdFundingCategories from '../Component/CrowdFundingCategories'
import Aarogyadhan_slider from '../Component/Aarogyadhan_slider'
import TopFundraisers from '../Component/TopFundraisers'
import ImpactFooter from '../Component/ImpactFooter'
import HowCanCrowdFundingHelp from '../Component/HowCanCrowdFundingHelp'
import bgimage from '../assets/Images/Icon Background.jpg'

const AarogyaDhan = () => {
  return (
    <div style={{ backgroundImage: `url(${bgimage})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed' }}>
      <AarogyaDhanNavbar/>
      <Aarogyadhan_slider/>

      <GiveEveryMonth/> 
      <CrowdFundingCategories/>
      <HowCanCrowdFundingHelp/>

       <TopFundraisers/>
      <ImpactFooter/>
    </div>
  )
}

export default AarogyaDhan

//Responsive Pending
// 1 GiveEveryMonth
// 2 HowCanCrowdFundingHelp