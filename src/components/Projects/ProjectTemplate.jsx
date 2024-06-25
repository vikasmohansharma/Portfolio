import React from 'react'
import "./ProjectTemplate.scss";
import SlideShow from  './SlideShow';

const ProjectTemplate = ({projectslides, projectCaption, projectDescription, projectActions}) => {
  return (        <div className="projectitem">
  <div className="tablet ">
  
    <div className="screen">
      <SlideShow slides={projectslides}/> 
    </div>
  </div>
  <h2 style={{ textAlign: "center" }}>{projectCaption}</h2>
  <p>
{projectDescription}
<div className='projectbuttons'>{projectActions}</div>
  </p>
</div>);
}

export default ProjectTemplate
