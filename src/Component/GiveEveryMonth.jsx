import React from 'react';
import "../css/style.css";

const GiveEveryMonth = () => {
  return (
    <>
      <div className="outer-container ">
        <div className="middle-section">
          <div className="left-part">
            <h1 style={{fontSize: 40, fontWeight: 'bold'}} className='text-blue-900'>Give Every Month</h1>
            <p className='text-blue-900' style={{fontSize: 40}}>To Save Countless Lives</p>
            <p className='subtext text-blue-900 mt-4'>GEM or ‘Give Every Month’ is a monthly donation subscription that helps patients in India afford life-saving treatment on time.</p>
            <br />
            <button style={{backgroundColor: 'white', borderRadius: 20, padding: 15}}>Give Every Month</button>
          </div>
          <div className="right-part">
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem-section-percent.png' />
                <h5>100% Transparency</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem-content_tax.png' />
                <h5>80G Tax Benefits</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem_content_award.png' />
                <h5>Win Rewards</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem_content_growth.png' />
                <h5>Track Your Impact</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveEveryMonth;