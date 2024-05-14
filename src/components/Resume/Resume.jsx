import React from "react";
import DownloadButton from "./DownloadResume/Download";
import "./Resume.scss";

const Resume = () => {
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
      <div></div>
      
      <DownloadButton
        file="downloadimage.jpg"
        filename="desiredFilename.jpg"
      />
      <button
        onClick={(e) => {
          window.open(
            "downloadimage.jpg",
            "_blank"
          );
        }}
      >
        DOWNLOAD TWO
      </button>
    </div>
  );
};

export default Resume;
