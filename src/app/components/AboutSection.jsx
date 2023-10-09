"use client";
import React, { useTransition, useState } from "react";
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul>
                <li>1. <b>Programming</b> - Data Structure & Algorithm with Java.</li>
                <li>2. <b>Development</b> - HTML, CSS, JavaScript & React.</li>
                <li>3. <b>DataBase</b> - PHP & MySQL.</li>
                <li>4. <b>Familier</b> - Git & GitHub.</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul>
                <li>
                    1. <b>Meerut Institute of Engineering & Technology (2020-2024)</b>
                    <li>* <b>B.Tech</b> in CSE - 7.0 CGPA</li>
                </li>
                <br />
                <li>
                    2. <b>B. K. S. V. M. Inter College, Nehtaur, Bijnor (2013-2020) </b>
                    <li>* <b>XII Class</b> (2019-2020) - 71.4 %</li>
                    <li>* <b>X Class</b> (2017-2018) - 78.5 %</li>
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content:(
            <ul>
                <li>1. AWS Cloud Foundation</li>
                <li>2. Google Cloud Practitioner(Badges)</li>
                <li>3. TCS ion Certificates</li>
            </ul>
        )
    }
]



const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition]= useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>

        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            
            <Image 
                src="/images/about.png"
                alt="Hero-image"
                width={500}
                height={500}
            />

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me
                </h2>
                
                <p className="text-base lg:text-lg">
                    I am an enthusiastic software engineer, eager to embark on my professional journey in the world of technology. Armed with a Bachelor of Technology in Computer Science and Engineering, I bring a strong foundation in programming languages such as Java and a passion for problem-solving. I am excited to learn, adapt, and contribute to innovative projects while continuously honing my skills. I am committed to becoming a valuable member of any team, bringing fresh perspectives and a drive to make a meaningful impact through software development
                </p>
               
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab= {() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                    </TabButton>
                    <TabButton selectTab= {() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                    </TabButton>
                    <TabButton selectTab= {() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                    </TabButton>
                </div>

                <div className="mt-8">
                    {
                        TAB_DATA.find((t) => t.id === tab).content
                    }
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default AboutSection
