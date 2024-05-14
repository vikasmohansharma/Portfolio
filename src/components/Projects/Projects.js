// Projects.js
import React from "react";
import "./Projects.scss";
import ProjectTemplate from "./ProjectTemplate";

function ProjectActionComponent({ DemoLink, GitHubLink }) {
  return (
    <>
      <a className="projectdemolink" target="blank" href={DemoLink}>
        Demo
      </a>
      <a className="projectgithublink" target="blank" href={GitHubLink}>
        GitHub
      </a>
    </>
  );
}

const gmslides = [
  {
    image: "projectfiles/GroupMail/gmlogin.jpg",
    description: "Group Mail Login",
  },
  { image: "projectfiles/GroupMail/gmdashboard.jpg", description: "Dashboard" },
  {
    image: "projectfiles/GroupMail/gmmtabuilder.jpg",
    description: "MTA Builder",
  },
  {
    image: "projectfiles/GroupMail/gmnewdeploy.jpg",
    description: "New Deployement",
  },
];
const netadminslides = [
  {
    image: "projectfiles/NetAdmin/NetAdminLogin.jpg",
    description: "Net Admin Login",
  },
  {
    image: "projectfiles/NetAdmin/OldNetAdmin.png",
    description: "Old Net Admin Dashboard",
  },
  {
    image: "projectfiles/NetAdmin/UpdatedNetAdmin.png",
    description: "New Net Admin Dashboard",
  },
  {
    image: "projectfiles/NetAdmin/NetAdminServers.jpg",
    description: "Net Admin Servers",
  },
];
const productionslides = [
  {
    image: "projectfiles/ProductionPortal/OfferLogin.jpg",
    description: "Offer Interface Login",
  },
  {
    image: "projectfiles/ProductionPortal/OfferDashboard.jpg",
    description: "Offer Interface Dashboard",
  },
  {
    image: "projectfiles/ProductionPortal/DWHLogin.jpg",
    description: "DWH Login",
  },
  {
    image: "projectfiles/ProductionPortal/DWHDashboard.jpg",
    description: "DWH Dashbaord",
  },
  {
    image: "projectfiles/ProductionPortal/MailAppPortal.jpg",
    description: "Mail App Portal",
  },

  {
    image: "projectfiles/ProductionPortal/NSapplication.png",
    description: "NS Application",
  },
  {
    image: "projectfiles/ProductionPortal/Suppression.jpg",
    description: "Suppression Portal",
  },
];
const vikaskeeps = [
  {
    image: "projectfiles/Keeps.png",
    description: "Vikas Keeps",
  },
];

const stopwatch = [
  {
    image: "projectfiles/stopwatch2.0.png",
    description: "Stopwatch 2.0",
  },
];

const Projects = () => {
  return (
    <>
      <div className="projectpage">
        <h1 style={{ textAlign: "center" }}>
          Some of My projects are listed below
        </h1>
        <div className="projects">
          <ProjectTemplate
            projectslides={gmslides}
            projectCaption="Group Mail"
            projectDescription="The Group Mail Portal served as the central application portal,
          facilitating various tasks such as VMTA building, campaign deployment, 
          and seed generation. Crafted primarily with JavaScript and jQuery, it ensured 
          seamless operation, contributing to expedited outcomes."
          />

          <ProjectTemplate
            projectslides={netadminslides}
            projectCaption="Net Admin"
            projectDescription="I revamped the Net Admin portal, enhancing its resource management and server administration capabilities. Improvements include streamlined server management, editing features, and an updated user interface for enhanced functionality and aesthetics."
          />
          <ProjectTemplate
            projectslides={productionslides}
            projectCaption="Production App"
            projectDescription="Contributed to a production app tailored for the production team's requirements. Features included an Offer interface for offer management, a DWH for database management, a suppression and NS application for quality analysis, and a Mail App for campaign design and delivery."
          />
          <ProjectTemplate
            projectslides={vikaskeeps}
            projectCaption="Vikas Keeps"
            projectDescription="
'Vikas Keeps' is a React app for note organization, featuring a user-friendly interface, robust authentication, and PostgreSQL integration for efficient data management. Security measures, including cloud storage and encryption, ensure user data protection."
            projectActions={
              <ProjectActionComponent
                DemoLink={"https://vikaskeeps.netlify.app/"}
                GitHubLink={"https://github.com/vikasmohansharma/VikasKeeps"}
              />
            }
          />
          <ProjectTemplate
            projectslides={stopwatch}
            projectCaption="Stopwatch 2.0"
            projectDescription="
The React Stopwatch offers a sleek interface for precise time tracking. Users can easily start, stop, pause, and reset the stopwatch, along with split and lap features. Utilizing modern web practices and React's architecture, it ensures optimal performance and usability. With its intuitive design, it's a valuable tool for efficient time management."
            projectActions={
              <ProjectActionComponent
                DemoLink={"https://vikas-stopwatch2.netlify.app/"}
                GitHubLink={"https://github.com/vikasmohansharma/Stopwatch"}
              />
            }
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
