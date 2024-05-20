import React from 'react';
import DownloadButton from './DownloadResume/Download';
import './Resume.scss';

const Resume = () => {
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
          onClick={() => {
            window.open('resume.pdf', '_blank');
          }}
        >
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
