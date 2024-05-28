import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects"; // Adjust the path as necessary
import MainProjectInfo from "./MainProjectInfo";

const ProjectSinglePage = () => {
  const { id } = useParams();
  console.log("URL Parameter ID:", id); // Debugging line
  const project = projectsData.find((proj) => {
    console.log("Comparing:", proj.id.toString(), id); // Debugging line
    return proj.id.toString() === id;
  });

  console.log("Found Project:", project); // Debugging line

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <MainProjectInfo project={project} />
    </motion.div>
  );
};

export default ProjectSinglePage;
