import React from 'react'
import HowItWorks_slider from '../Component/HowItWorks_slider'
import HowItWorks_achievments from '../Component/HowItWorks_achievments';
import HowItWorks_Navbar from '../Component/HowItWorks_Navbar';
import HowItWorks_YouCanChoose from '../Component/HowItWorks_YouCanChoose';
import RaiseFund from '../Component/RaiseFund';
import HowItWorks_slider2 from '../Component/HowItWorks_slider2';
import WhatsCrowdFunding from './WhatsCrowdFunding';
import HowDoesCrowdfunding from './HowDoesCrowdfunding';
import FundraisingJourney from './FundraisingJourney';
import WhyFundraiser from './WhyFundraise';
import Faq from './Faq';
import HowItWorksFooter from './HowItWorksFooter';
const HowItWorks = () => {
    return (
        <div>
            <HowItWorks_Navbar/>
            <HowItWorks_slider />
            <HowItWorks_achievments/>
            <HowItWorks_YouCanChoose/>
            <RaiseFund/>
            <HowItWorks_slider2/>
            <WhatsCrowdFunding/>
            <HowDoesCrowdfunding/>
            <FundraisingJourney/>
            <WhyFundraiser/>
            <Faq/>
            <HowItWorksFooter/>
        </div>
    )
}

export default HowItWorks