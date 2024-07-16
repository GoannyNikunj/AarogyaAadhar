import React from 'react'
import HowItWorks_slider from '../Component/HowItWorks_slider'
import HowItWorks_achievments from '../Component/HowItWorks_achievments';
import HowItWorks_Navbar from '../Component/HowItWorks_Navbar';
import HowItWorks_YouCanChoose from '../Component/HowItWorks_YouCanChoose';
import RaiseFund from '../Component/RaiseFund';
import HowItWorks_slider2 from '../Component/HowItWorks_slider2';
const HowItWorks = () => {
    return (
        <div>
            <HowItWorks_Navbar/>
            <HowItWorks_slider />
            <HowItWorks_achievments/>
            <HowItWorks_YouCanChoose/>
            <RaiseFund/>
            <HowItWorks_slider2/>
        </div>
    )
}

export default HowItWorks