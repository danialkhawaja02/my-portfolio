import { useEffect, useState } from "react";
import IntroTitle from "./IntroTitle";
import ProjectBox from "./ProjectBox";
import { motion, useMotionValue } from "framer-motion";

const projects = [
    { img: "..\\..\\assets\\biznet.png", img1:"..\\..\\assets\\biznet1.png", link:"https://biznet.com.pk",  title: "BizNet", description:"Responsible for creating the WordPress website for BizNet, a groundbreaking initiative hosted at the Presidential House in Pakistan. I utilized the latest WordPress technologies and best practices to ensure the website's performance, security, and scalability." },
    { img: "..\\..\\assets\\journify.png", img1: "..\\..\\assets\\journify1.png", link:"https://journify-five.vercel.app", title: "Journify Web App", description: "A web app designed to make journaling effortless and deeply personal using React.js, focusing on user experience and secure backend services with AppWrite." },
    { img: "..\\..\\assets\\chatbot.png", img1: "..\\..\\assets\\chatbot1.png", link:"https://ai-chat-bot-six-pi.vercel.app", title: "AI Chatbot", description: "Built an AI chatbot using Gemini API, LangChain, and Retrieval-Augmented Generation (RAG) to automate company query responses, reducing support workload by 30% and improving customer engagement with accurate, real-time answers." },
    { img: "..\\..\\assets\\fhk.png", img1: "..\\..\\assets\\fhk1.png", link:"https://faizanhayat.com", title: "Faizan Hayat Khan's Landing Page", description: "I re-design a WordPress landing page for Faizan Hayat Khan, a skilled Erasmus Mundus Scholar, Content & Digital Marketing Specialist. The goal was to create a visually appealing design that effectively showcased Faizan's diverse expertise and generate leads from students interested in applying for the Erasmus Mundus Scholarship." },
]

export default function Portfolio() {
    const cursorSize = 50;
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const manageMouseMove = (e) => {
            mouseX.set(e.clientX - cursorSize / 2);
            mouseY.set(e.clientY - cursorSize / 2);
        };
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <div className="flex flex-col gap-10 height py-10" id="portfolio">
                <IntroTitle title="Portfolio" />
                <div className="titleColor text-[2.5rem] sm:text-[4rem] leading-[1em] font-semibold leading-[4rem]">
                    <h2>Check out my featured projects</h2>
                </div>
                <motion.div
                    className="cursor"
                    initial={false}
                    style={{ x: mouseX, y: mouseY }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                >
                    <img src="../../assets/cursor.png" alt="Custom Cursor" />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projects.map((list, index)=>
                        <ProjectBox  
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            key={index}
                            image={list.img}
                            image1={list.img1}
                            title={list.title}
                            description={list.description}
                            link={list.link}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
