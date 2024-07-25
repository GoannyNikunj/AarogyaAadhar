import React, { useState } from 'react';
import "../css/style.css"
const WhyFundraiser = () => {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(true);
    };

    const buttonStyle = {
        width: '270px',
    };
    

    return (
        <div className="flex justify-center mt-10 mb-12">
            <div className="w-3/5">
                <div className='text-2xl text-center mb-5'>
                    Why Fundraise With ImpactGuru?
                </div>
                <hr className='divider my-5' />
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-100 p-5 rounded h-[200px]">Card 1</div>
                    <div className="bg-gray-100 p-5 rounded h-[250px]">Card 2</div>
                    <div className="bg-gray-100 p-5 rounded h-[200px]">Card 3</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className={`bg-gray-100 p-5 rounded ${showMore ? '' : 'blur'}`}>Card 4</div>
                    <div className={`bg-gray-100 p-5 rounded ${showMore ? '' : 'blur'}`}>Card 5</div>
                    <div className={`bg-gray-100 p-5 rounded ${showMore ? '' : 'blur'}`}>Card 6</div>
                </div>
                {!showMore && (
                    <div className='text-center mb-5'>
                        <a href="#" onClick={handleClick}>Click to view all features</a>
                    </div>
                )}
                <div className="flex justify-center space-x-4">
                    <button style={buttonStyle} className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold py-2 px-4 rounded">
                        START A FREE FUNDRAISER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyFundraiser;
