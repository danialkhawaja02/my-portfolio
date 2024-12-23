import ExperienceRow from "./ExperienceRow";
import IntroTitle from "./IntroTitle";

const eduExperience = [
    {
        year: "2023-Present",
        designation: "Student Ambassador",
        institute: "Microsoft",
        summary: "Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future."

    },
    {
        year: "2021-Present",
        designation: "Bachelors in Business & IT",
        institute: "University of the Punjab, Lahore",
        summary: "Electives focused on technologies: Web Engineering, Database System, OOP, DSA, OS, Cloud Computing, Entrepreneurship, Project Management"

    },
    {
        year: "2019-2021",
        designation: "Intermediate in Computer Science",
        institute: "Aspire College, Lahore",
        summary: "Awarded with Merit Scholarship for all two years, Got 'Student Talent Award' and 'Gold Medal' For Top Performer"

    }
]

const workExperience = [
    {
        year: "June 2024-August 2024",
        designation: "Front-End Developer Intern",
        institute: "Dot Labs",
        summary: "At Dot Labs, I work on building AI-driven solutions and web applications to make processes more efficient and user-friendly. My role involves using tools like React, Next.js, and AI integrations to create seamless, impactful experiences for users."

    },
    {
        year: "2021-Present",
        designation: "WordPress Developer",
        institute: "Green Team",
        summary: "Responsible for website testing, maintenance, and collaborating with the team to identify and resolve issues while suggesting improvements."

    },
    {
        year: "2021-Present",
        designation: "Founder",
        institute: "Study Bhai",
        summary: "Study Bhai - a vision for accessible and empowering education for every student in Pakistan. This vision is driven by me, and my unwavering belief in the transformative power of education."

    }
]


export default function Experience() {
    return(
        <>
            <div className="flex flex-col gap-10 height py-10" id="experience">
                <IntroTitle title="Experience" />
                <div className="titleColor text-[2.5rem] sm:text-[4rem] leading-[1em] font-semibold leading-[4rem]">
                        <h2>Education and practical experience</h2>
                </div>
                <p className="text-lg">
                Driven by a passion for learning and excellence, my academic journey reflects a commitment to mastering cutting-edge technologies and practical skills, while my experiences showcase the ability to turn knowledge into impactful outcomes.
                </p>
                <div className="flex flex-col gap-20">
                    <div>
                        <h2 className="text-[2rem] font-semibold" >My Education</h2>
                        {eduExperience.map((list)=> 
                            <ExperienceRow year={list.year} designation={list.designation} institute={list.institute} summary={list.summary} />
                        )}
                    </div>

                    <div>
                        <h2 className="text-[2rem] font-semibold" >Work Experience</h2>
                        {workExperience.map((list)=> 
                            <ExperienceRow year={list.year} designation={list.designation} institute={list.institute} summary={list.summary} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}