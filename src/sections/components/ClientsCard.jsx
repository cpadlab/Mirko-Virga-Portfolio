import { motion } from 'framer-motion';
import { useState } from 'react';

export const ClientsCard = ({ image, title2, title1 }) => {

    if (!image) {return;}

    const anim = {
        initial: {width: 0},
        open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
        closed: {width: 0}
    }

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="relative border-b-2 flex items-center justify-center group bg-black" onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>
            <h2 className="text-4xl text-white leading-none flex justify-center items-center w-full cursor-pointer gap-2 py-4 md:text-6xl">
                <p>{title1}</p>
                <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="overflow-hidden flex justify-center md:h-12 h-8">
                    <img src={image} alt={`${title1} Image`} className="w-[10vw] object-cover"/>
                </motion.div>
                <p>{title2}</p>
            </h2>
        </div>
    );
    

}
