import React from "react";
import DownloadButton from "./DownloadResume/Download";
import "./Resume.scss";

/* const Resume = () => {
  return (
    <div className="resume">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
      <embed src="resume.pdf" type="application/pdf" width="100%" height="600px" alt="Loading RESUME.."/>
     
    </div>    
    <div>
      <object data="resume.pdf" type="application/pdf" width="100%" height="600px">
        Your browser doesn't support embedded PDFs. <a href="/path/to/your/pdf/file.pdf">Click here to download the PDF.</a>
      </object>
    </div>  
      <DownloadButton
        file="resume.pdf"
        filename="desiredFilename.jpg"
      />
      <button
        onClick={(e) => {
          window.open(
            "resume.pdf",
            "_blank"
          );
        }}
      >
        View In Separate Window
      </button>
    </div>
  );
}; */

function Resume() {

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginRight: '10px', // Add margin to create space between buttons
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DownloadButton /><br />
        <button style={{ ...buttonStyle, backgroundColor: '#28a745' }}
        onClick={(e) => {
          window.open(
            "resume.pdf",
            "_blank"
          );
        }}
      >
        View Resume
      </button>
      </div>
    </div>
  );

}
export default Resume;
