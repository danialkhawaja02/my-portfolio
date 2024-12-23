import { useEffect, useState } from "react";
import IntroTitle from "./IntroTitle";
import SkillBox from "./SkillBox";
import { motion, useMotionValue } from "framer-motion";

const skillsInfo = [
    { num: "35+", title: "Happy Clients" },
    { num: "4+", title: "Years of Experience" },
    { num: "50+", title: "Projects Done" }
];

const skillsTool = [
    { img: "src\\assets\\icon-wp.png", title: "WordPress" },
    { img: "src\\assets\\icon-html.png", title: "HTML" },
    { img: "src\\assets\\icon-css.png", title: "CSS" },
    { img: "src\\assets\\icon-js.png", title: "JavaScript" },
    { img: "src\\assets\\icon-typescript.png", title: "TypeScript" },
    { img: "src\\assets\\icon-react.png", title: "React JS" },
    { img: "src\\assets\\icon-next.png", title: "Next JS" },
    { img: "src\\assets\\icon-tailwind.png", title: "Tailwind CSS" }
];

export default function About() {
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
            <div className="flex flex-col gap-6 height py-10" id="about">
                <IntroTitle title="About Me" />
                <div className="titleColor text-[2.5rem] sm:text-[4rem] leading-[1em] font-semibold leading-[4rem]">
                    <h2>Transforming Ideas into Stunning Websites</h2>
                </div>
                <motion.div
                    className="mask"
                    initial={false}
                    style={{ x: mouseX, y: mouseY }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                />
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    <p className="text-lg hidden-text -mt-8">
                    I’ve spent the last 4 years crafting custom WordPress websites that help businesses build a strong online presence. Whether you need a sleek business site, a high-converting landing page, or a fully functional e-commerce store, I have the skills to bring your vision to life. From intuitive page builders like Elementor and WPBakery to advanced features with WooCommerce and Custom Fields, I specialize in creating websites that not only look great but also deliver measurable results.
                    <br/><br/>
                    In addition to WordPress, I am also a passionate front-end developer with hands-on experience in React.js and Next.js. I blend creativity with technology to design and develop fast, responsive, and user-friendly interfaces that leave a lasting impression.
                    <br/><br/>
                    With over 50 successful WordPress projects and 6 months of experience building dynamic front-end solutions, I’m dedicated to turning ideas into reality. My focus is on helping startups and businesses grow online by delivering exceptional web experiences.
                    </p>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row justify-between">
                    {skillsInfo.map((list, index) => (
                        <SkillBox key={index} num={list.num} title={list.title} />
                    ))}
                </div>
                <div>
                    <h2 className="text-[2rem] font-semibold py-7">My Skills Expertise</h2>
                    <div className="flex flex-wrap flex-col gap-5 sm:flex-row justify-between">
                        {skillsTool.map((list, index) => (
                            <SkillBox key={index} title={list.title} img={list.img} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
