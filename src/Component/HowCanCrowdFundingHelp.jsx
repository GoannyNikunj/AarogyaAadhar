import React from 'react'
import "../css/style.css"

const HowCanCrowdFundingHelp = () => {
  return (
    <div className="container">
      <text className="heading mb-8 text-3xl font-bold text-blue-900">How Can Crowdfunding Help?</text>
      <hr className='divider' style={{marginTop:20}}></hr>
      <text className="subtext mb-5 text-blue-500 "><br/>
        Crowdfunding can be an effective way to raise funds.<br/>
        It leverages the power of the crowd to gather small amounts of money from a large number of people.
      </text>
      <table className="transparent-section mt-5">
        <tbody>
          <tr >
            <td style={{padding:30,borderBottom:'1px solid white',borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>25000+<br />Patients Funded</p>
            </td>
            <td style={{padding:30,borderBottom:'1px solid white',borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>24/7<br />Personalized Expert Assistance</p>
            </td>
            <td style={{padding:30,borderBottom:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>30 Lakh+<br />Donor Community</p>
            </td>
          </tr>
          <tr>
            <td style={{padding:30,borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>Fast Review of Fundraisers</p>
            </td>
            <td style={{padding:30,borderRight:'1px solid white'}}>
              <p style={{ fontSize: 25 }}>Indian Tax Benefits</p>
            </td>
            <td style={{padding:30}}>
              <p style={{ fontSize: 25 }}>Free iOS & Android App</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HowCanCrowdFundingHelp