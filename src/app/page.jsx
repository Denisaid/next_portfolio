'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* IMAGE CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                    <Image src="/hero.png" alt="" fill className="object-contain" />
                </div>
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 xl:gap-8 items-center justify-center">
                    {/* TITLE */}
                    <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold">
                        Step into a world where pixels dance, code sings, and creativity knows no bounds.
                    </h1>
                    {/* DESC */}
                    <p className="text-sm 2xl:text-xl">
                        I welcome you to my world to explore the fusion of art and technology within the digital
                        realms. With a toolbox filled with HTML, CSS, JavaScript, and a sprinkle of magic, I strive
                        to turn visions into realities, one line of code at a time. So, whether you're a fellow dreamer,
                        a curious explorer, or a visionary seeking to bring your ideas to life, rest assured that you've
                        found a trusted partner in your digital endeavors.
                    </p>
                    {/* BUTTONS */}
                    <div className="lg:w-full flex gap-4">
                        <Link href='/portfolio' className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
                            View My Work
                        </Link>
                        <Link href='/contact' className="p-3 rounded-lg ring-1 ring-black">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;
