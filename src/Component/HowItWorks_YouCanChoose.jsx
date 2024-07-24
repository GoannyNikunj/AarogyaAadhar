import React from 'react';
import "../css/style.css"

const HowItWorks_YouCanChoose = () => {
  return (
    <div className="youcanchoose-container">
      <div className="half">
       <h1 style={{fontSize:30,fontWeight:'bold'}}>You can Choose<br/>
       Medical Fundraising with<br/> ImpactGuru if</h1>
       <ul style={{listStyleType:'initial',marginLeft:40}}>
        <li>You need funds urgently</li>
        <li>You have limited savings</li>
        <li>Medical Loans and Insurance are not enough</li>
        </ul>
        <br/>
        <p>Get financial help for medical treatment by raising funds
        with the support of donors and well-wishers online.</p>
        <br/>
        <button className='border border-blue-500 p-3 ' style={{width:'50%',boxShadow: 'rgba(0, 0, 230, 0.5) 0px 3px 8px'}}><b>GET A CALLBACK</b></button>
      </div>
      <div className="half">
        <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/medical-crowdfunding/webp/trial-croped.webp' style={{marginTop:-100,width:'75%'}}/>
      </div>
    </div>
  );
}

export default HowItWorks_YouCanChoose;