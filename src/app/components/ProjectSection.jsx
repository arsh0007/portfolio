"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title:'Netflix Clone (React.js)',
        description: "Enjoy a responsive, React.js-powered frontend for streaming your favorite movies and shows. Dynamic previews make your viewing experience seamless & enjoyable.",
        image: "/images/projects/1.png",
        tag: ["All", "Programming"],
        gitUrl:"https://github.com/arsh0007/Netflix-clone",
        previewUrl:"https://netflix-clone-5db37.web.app/"
    },
    {
        id: 2,
        title:'LinkedIn Clone (React.js)',
        description: "React.js-powered professional network replica for connecting, networking, and exploring job opportunities with a user-friendly interface. Grow your career today!",
        image: "/images/projects/2.png",
        tag: ["All", "Programming"],
        gitUrl:"https://github.com/arsh0007/Linkedin-Clone",
        previewUrl:"https://linkedin-clone-murex-eta.vercel.app/"
    },
    {
        id: 3,
        title:'Merchandise (JavaScript, PHP)',
        description: "Merchandise Webpage: Explore trendy apparel, accessories, and more with our HTML, CSS, JavaScript, and PHP-powered online store. Elevate your style effortlessly!",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/arsh0007/MerchandiseWebsite",
        previewUrl:"https://arsh0007.github.io/MerchandiseWebsite/"
    },
    {
        id: 4,
        title:'To Do List (Next.js)',
        description: "Simplify task management with our fast, responsive app. Create, prioritize, and check off tasks seamlessly. Stay organized and boost productivity with our intuitive To-Do List.",
        image: "/images/projects/4.png",
        tag: ["All", "Programming"],
        gitUrl:"https://github.com/arsh0007/TodoList",
        previewUrl:"https://todo-list-delta-vert.vercel.app/"
    },
    {
        id: 5,
        title:'Apple Vision Clone (BootStrap)',
        description: "Discover the future of technology with our HTML, CSS, JavaScript, and Bootstrap-powered Apple Vision Clone. Explore products & innovations that redefine the tech landscape.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl:"https://github.com/arsh0007/Apple_Vision_Pro_Webpage_Clone/tree/main",
        previewUrl:"https://arsh0007.github.io/Apple_Vision_Pro_Webpage_Clone/"
    },
    {
        id: 6,
        title:'Guesser Game',
        description: "A Java Guessing Game involves players guessing a randomly selected number within a set number of tries, receiving hints to deduce the secret number.",
        image:"/images/projects/6.png",
        tag: ["All", "Programming"],
        gitUrl:"https://github.com/arsh0007/GuesserGame",
        previewUrl:"https://github.com/arsh0007/GuesserGame"
    }
]




const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) =>{
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <div id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-10 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
              onClick={handleTagChange}
              name="All"
              active={tag} 
              isSelected={tag === "All"}
            />
            <ProjectTag 
              onClick={handleTagChange}
              name="Web"
              active={tag} 
              isSelected={tag === "Web"}
            />
            <ProjectTag 
              onClick={handleTagChange}
              name="Programming"
              active={tag} 
              isSelected={tag === "Programming"}
            />
      </div>
      <ul ref={ref} 
        className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index)=> (
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectSection
