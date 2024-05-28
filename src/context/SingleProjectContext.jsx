import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/projects";
import { mainProject } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson
  );

  const [projectData, setProjectData] = useState(projectData);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
