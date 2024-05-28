import { Link } from "react-router-dom";
const ProjectInfo = ({ project }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
        {/* Breadcrumb Navigation */}
        <div className="w-[94%] mx-auto flex gap-1 items-center text-gray-500 sm:text-[12px] xs:text-[10px] font-semibold dark:text-gray-400">
          <div>Projects</div>
          <div className="font-semibold text-md">&gt;</div>
          <div>{project.category}</div>
          <div className="font-semibold text-md">&gt;</div>
          <div>{project.title}</div>
        </div>

        {/* Project Title */}
        <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 text-gray-800 dark:text-orange-500">
          {project.ProjectHeader.title}
        </h1>

        {/* Project Cover Image */}
        <img
          src={project.img}
          alt={project.title}
          className="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg"
        />

        {/* Project Info */}
        <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {project.ProjectHeader.publishDate}
          </h3>
          <div className="dark:text-gray-500">|</div>
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {project.ProjectHeader.tags}
          </h4>
        </div>

        {/* Project Client Details */}
        {project.ProjectInfo?.ClientHeading && (
          <div className="w-[90%] mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-4">
              {project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2"
                    key={info.id}
                  >
                    <span className="font-semibold">{info.title}: </span>
                    <Link
                      to={info.title === "Website" ? info.details : "#"}
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Project Objectives */}
        {project.ProjectInfo?.ObjectivesHeading && (
          <div className="w-[90%] mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
              {project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light tracking-wide leading-loose">
              {project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>
        )}

        {/* Project Technologies */}
        {project.ProjectInfo?.Technologies &&
          project.ProjectInfo.Technologies.length > 0 && (
            <div className="w-[90%] mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
                {project.ProjectInfo.Technologies[0].title}
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {project.ProjectInfo.Technologies[0].techs.join(", ")}
              </p>
            </div>
          )}

        {/* Project Details */}
        {project.ProjectInfo?.ProjectDetailsHeading &&
          project.ProjectInfo?.ProjectDetails && (
            <div className="w-[90%] mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                {project.ProjectInfo.ProjectDetailsHeading}
              </p>
              {project.ProjectInfo.ProjectDetails.map((details) => {
                return (
                  <p
                    key={details.id}
                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light tracking-wide leading-loose"
                  >
                    {details.details}
                  </p>
                );
              })}
            </div>
          )}

        {/* Project Challenges */}
        {project.ProjectInfo?.Challenges && (
          <div className="w-[90%] mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-4">
              Challenges
            </h2>
            <div
              className="font-general-regular text-primary-dark dark:text-ternary-light tracking-wide leading-loose"
              dangerouslySetInnerHTML={{
                __html: project.ProjectInfo.Challenges,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
