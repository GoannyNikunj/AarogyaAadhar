import React, { useRef, useEffect, useState } from 'react';
import "../css/style.css";
import step1 from "../assets/Images/Step1.mp4";
import step2 from "../assets/Images/Step2.mp4";
import step3 from "../assets/Images/Step3.mp4";

const HowDoesCrowdfunding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const playNextVideo = () => {
            if (currentStep < videoRefs.length) {
                videoRefs[currentStep].current.play();
            }
        };

        // Play the first video when component mounts
        playNextVideo();

        // Event listener for ending of videos
        videoRefs[currentStep].current.addEventListener('ended', () => {
            if (currentStep < videoRefs.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        });

        // Cleanup event listener
        return () => {
            videoRefs[currentStep].current.removeEventListener('ended', () => {
                if (currentStep < videoRefs.length - 1) {
                    setCurrentStep(currentStep + 1);
                }
            });
        };
    }, [currentStep]);

    return (
        <>
            <div className='heading text-center mb-5'>
                How Does Crowdfunding on ImpactGuru Work?
                <hr className="divider" style={{ marginTop: 20, marginBottom: 30 }} />
            </div>
            <div className='outerdiv2'>
                <div className='partition2 left-text'>
                    <div className='step-container'>
                        <div className={`step ${currentStep === 0 ? 'step-active' : 'step-inactive'}`}>
                            <p>1</p>
                            <p>Start a free fundraiser</p>
                            <p>Start a free fundraiser by filling in all the relevant details</p>
                        </div>
                        <div className={`step ${currentStep === 1 ? 'step-active' : 'step-inactive'}`}>
                            <p>2</p>
                            <p>Start a free fundraiser</p>
                            <p>Start a free fundraiser by filling in all the relevant details</p>
                        </div>
                        <div className={`step ${currentStep === 2 ? 'step-active' : 'step-inactive'}`}>
                            <p>3</p>
                            <p>Start a free fundraiser</p>
                            <p>Start a free fundraiser by filling in all the relevant details</p>
                        </div>
                    </div>
                </div>
                <div className='partition2'>
                    {videoRefs.map((videoRef, index) => (
                        <video key={index} ref={videoRef} src={index === 0 ? step1 : index === 1 ? step2 : step3} autoPlay={index === 0} muted className={currentStep === index ? 'video-visible' : 'video-hidden'} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HowDoesCrowdfunding;
