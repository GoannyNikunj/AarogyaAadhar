import React from 'react';
import '../css/style.css'; // Assuming you create a separate CSS file for this component

const HowItWorks_achievments = () => {
  return (
    <div className="content-container">
      <div className="Howitworkspartition">
        <h3 style={{fontSize:25}}>30 Lac+</h3>
        <p>Generous Donors</p>
      </div>
      <div className="Howitworkspartition">
      <h3 style={{fontSize:25}}>2 Lac+</h3>
      <p>Fundraisers Created Successfully</p>
      </div>
      <div className="Howitworkspartition">
      <h3 style={{fontSize:25}}>Fastest ₹1 Crore</h3>
      <p>Raised In 24 Hrs!</p>
      </div>
    </div>
  );
}

export default HowItWorks_achievments;