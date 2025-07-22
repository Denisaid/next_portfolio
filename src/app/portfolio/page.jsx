'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const items = [
    {
        id: 1,
        color: 'from-purple-200 to-blue-300',
        title: 'DDS-AI Chat Bot App',
        desc: 'DDS-Ai app',
        img: '/dds-ai.png',
        link: 'https://github.com/Denisaid/DDS_AI.git',
        demo: 'https://dds-ai.vercel.app/'
    },
    {
        id: 1,
        color: 'from-purple-200 to-blue-300',
        title: 'React Fitness Exercises App',
        desc: 'Тhis application contains functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more.',
        img: '/gym.png',
        link: 'https://github.com/RamadanEmin/React_Fitness_Exercises_App',
        demo: 'react-fitness-exercises-app-three.vercel.app'
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'React Responsive Restaurant Website',
        desc: 'Transform a Figma design into a fully functioning modern responsive restaurant website.',
        img: '/restaurant.png',
        link: 'https://github.com/RamadanEmin/react_responsive_restaurant_website',
        demo: 'https://era-responsive-restaurant-website.netlify.app/'
    },
    {
        id: 3,
        color: 'from-violet-300 to-green-300',
        title: 'React Music App',
        desc: 'This is a music web app with different functionalities and navigation. It has audio player with basic controls like play, pause, repeat, shuffle, next, previous, fast-forward and volume control with an interactive GUI. It has the ability to fetch all the songs available on the internet using the search functionality, detailed information of every song and artist with lyrics, filter by genre to pick the top songs and top artists, explore the most popular songs in your country, trendings artists and worldwide top charts, data is fetched from unlimited source through API\'s. It is responsive and works on all the devices.',
        img: '/music.png',
        link: 'https://github.com/RamadanEmin/react_music_app',
        demo: 'https://era-music-app.netlify.app/'
    },
    {
        id: 4,
        color: 'from-green-300 to-yellow-300',
        title: 'NextJS Metaversus Website',
        desc: 'In this project transform a Figma design into a fully functioning website using Next13, Framer Motion, and Tailwind CSS and build Metaversus website.',
        img: '/metaverse.png',
        link: 'https://github.com/Denisaid/nextjs_metaversus_website.git',
        demo: 'https://nextjs-metaversus-website.vercel.app/'
    },
    {
        id: 5,
        color: 'from-yellow-300 to-red-300',
        title: 'NextJS Eccomerce',
        desc: 'A fully responsive Modern Full Stack Commerce application with Payments functionality. With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe so that you can cover REAL payments.',
        img: '/sanity_eccomerce.png',
        link: 'https://github.com/RamadanEmin/era_ecommerce',
        demo: 'https://era-ecommerce.vercel.app/'
    },
    {
        id: 6,
        color: 'from-red-300 to-blue-300',
        title: 'NextJS News App',
        desc: 'A fully responsive Live news app to fetch the news using Media Stack API. With Modern design and integrated light / dark background theme.',
        img: '/news.png',
        link: 'https://github.com/Denisaid/era_news_app.git',
        demo: 'https://era-news-qhizet2fx-ramo-pld7-abvbg.vercel.app/'
    },
    {
        id: 7,
        color: 'from-blue-300 to-violet-300',
        title: 'NextJS weather app',
        desc: 'A comprehensive weather application that utilizes the power of TypeScript, Next.js, Tailwind CSS, React, OpenAI GPT-4, Stepzen, Tremor 2.0, and Open Meteo. The app offers real-time weather updates, a dynamic city picker. It also includes innovative features like AI-generated weather summaries powered by OpenAI GPT-4, and an optimized UI/UX.',
        img: '/weather.png',
        link: 'https://github.com/RamadanEmin/era_weather_app',
        demo: 'https://stepzen-weatherapp.vercel.app/'
    },
    {
        id: 8,
        color: 'from-violet-300 to-red-300',
        title: 'Promptopia',
        desc: 'Promptopia is a web application designed to inspire and facilitate creative writing. Whether you\'re a seasoned writer looking for fresh ideas or a beginner trying to get started, Promptopia provides a collection of writing prompts to spark your imagination.',
        img: '/promptopia.png',
        link: 'https://github.com/RamadanEmin/promptopia',
        demo: 'https://promptopia-kohl-alpha.vercel.app/'
    },
    {
        id: 9,
        color: 'from-red-300 to-gray-300',
        title: 'React Admin Dashboard',
        desc: 'React admin dashboard create with Rechart and MUI react-data-grid',
        img: '/admin_dashboard.png',
        link: 'https://github.com/RamadanEmin/eRa_admin_dashboard',
        demo: 'https://era-admin-dashboard.netlify.app/'
    },
    {
        id: 10,
        color: 'from-gray-300 to-blue-300',
        title: 'MERN Booking App',
        desc: 'Hotel Booking Web App built on the MERN stack where users can register themselves and book the hotel they want.',
        img: '/booking.png',
        link: 'https://github.com/RamadanEmin/mern-booking-app',
        demo: 'https://mern-booking-app-bs1l.onrender.com/'
    },
    {
        id: 11,
        color: 'from-blue-300 to-violet-300',
        title: 'Doctor Appointment Booking Application',
        desc: 'This is a web application designed to facilitate booking appointments with doctors online. It provides a convenient platform for users to browse available doctors, schedule appointments, and manage their bookings.',
        img: '/doctor.png',
        link: 'https://github.com/RamadanEmin/mern_doctor_appointment_app',
        demo: 'https://mern-doctor-booking.vercel.app/'
    },
    {
        id: 12,
        color: 'from-violet-300 to-gold-300',
        title: 'Mern Chat App',
        desc: 'Full Stack Chatting App uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.',
        img: '/chat.png',
        link: 'https://github.com/Denisaid/mern_chat_app.git',
        demo: 'https://mern-chat-app-j8b1.onrender.com/'
    },
];

const PortfolioPage = () => {
    const ref = useRef();
    const [scrolling, setScrolling] = useState(false);

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-92.7%']);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(false);
        };

        if (scrolling) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-4xl md:text-8xl text-center gap-4">
                    My Works
                    <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: '10px' }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        onClick={() => setScrolling(true)}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-red-100" />
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-purple-200" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-start justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col items-center gap-8 text-white">
                                    <h1 className="text-xl text-center pt-8 font-bold md:text-2xl lg:text-4xl xl:pt-0">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-[320px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 text-center md:w-96 lg:w-[500px] lg:text-lg xl:w-[1200px]">
                                        {item.desc}
                                    </p>
                                    <div className="flex gap-5">
                                        <Link href={item.demo}>
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-700 hover:text-white">See Demo</button>
                                        </Link>
                                        <Link href={item.link}>
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-700 hover:text-white">See Code</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-6xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
