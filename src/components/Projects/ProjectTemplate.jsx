import React from 'react'
import "./ProjectTemplate.scss";
import SlideShow from  './SlideShow';

const ProjectTemplate = ({projectslides, projectCaption, projectDescription, projectActions}) => {
  return (        <div className="projectitem">
  <div class="tablet ">
  
    <div class="screen">
      <SlideShow slides={projectslides}/> 
    </div>
  </div>
  <h2 style={{ textAlign: "right" }}>{projectCaption}</h2>
  <p>
{projectDescription}
<div className='projectbuttons'>{projectActions}</div>
  </p>
</div>);
}

export default ProjectTemplate
