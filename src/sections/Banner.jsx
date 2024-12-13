import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import videoIntro from '../assets/videos/test.mp4'

export const Intro = () => {

    const wrapperRef = useRef(null);
    const maskRef = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        
        gsap.to(maskRef.current, {
            scale: 300,
            scrollTrigger: {
                trigger: wrapperRef.section,
                scrub: 1,
                pin:true,
                start: "top top",
                end: "+=500",
            },
        });


    }, []);


    return (
        <section className='relative overflow-hidden w-full'>

            <div className='absolute w-full z-10 top-4 left-4'>
                <p className='text-black no-underline select-none font-sans text-base relative'>Portfolio © 2024 Developed by <a className='text-nowrap relative after:absolute after:content-[""] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-black' href="https://cpadlab.github.io/" target="_blank">Carlos Padilla</a></p>
            </div>

            <div className='h-screen' ref={wrapperRef} id='wrapper'>
                
                <video preload="none" autoPlay playsInline loop src={videoIntro} type="video/mp4" muted className='fixed -z-[1] inset-0 h-full w-full object-cover mask-180'>
                    <source src={videoIntro} type="video/mp4" />
                </video>
                
                <div className='mix-blend-lighten h-screen w-full bg-white flex justify-center items-center' ref={maskRef}>
                    <div className='flex flex-col p-2'>
                        <h1 className='text-black font-bold select-none font-sans text-[6rem] leading-[.8] text-center'>Mirko{" "}<span className='font-serif'>Vigna</span></h1>
                        <h2 className='text-black select-none font-sans text-[1.2rem] text-center leading-none uppercase min-[480px]:text-left max-[480px]:mt-[1.5em]'>Films</h2>
                    </div>
                </div>

            </div>

        </section>
    )
}
