import React from 'react';
import "../css/style.css";

const Aarogyadhan_slider = () => {
    return (
        <div className="slider">
            <div className="slider-content">
                <div className="label mt-20" style={{paddingLeft:60}}>
                    <h1 className='text-blue-900 font-bold' style={{fontSize:50}}>Need Funds For Your <br/>Medical Treatment</h1> 
                    <p className='text-blue-500 font-semibold' style={{fontSize:20}}>Dont worry wou've come to the right platform</p>
                    <hr/>
                    <br/>
                    <p className='text-blue-500 font-semibold' style={{fontSize:20}}>With <b className='text-blue-900 font-bold'>0%*</b> platform fee, you can raise funds too!</p>
                    <br/>
                    <button className='btn help-button ' style={{borderRadius:50,padding:15}}>Start A Free Fundraiser</button>
                </div>
                <img src="https://st4.depositphotos.com/16122460/28631/i/450/depositphotos_286315472-stock-photo-woman-giving-red-heart-to.jpg" alt="Image" className=' h-[85vh]' />
            </div>
        </div>
    );
}

export default Aarogyadhan_slider;