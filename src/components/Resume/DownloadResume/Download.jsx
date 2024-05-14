import React, { useState } from 'react';
import axios from 'axios';

const ConfirmationDialog = ({ message, onConfirm }) => {
  return (
    <div className="confirmation-dialog">
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button>No</button>
    </div>
  );
};

const DownloadButton = ({ file }) => {
  // eslint-disable-next-line
  const [filename, setFilename] = useState('Vikas_Sharma_Resume.pdf'); // Default filename
  const [showConfirmation, setShowConfirmation] = useState(false);

  const downloadFile = async () => {
    setShowConfirmation(true);
  };

  const handleConfirmDownload = async () => {
    setShowConfirmation(false);
    // Proceed with download logic
    try {
      const response = await axios.get(file, { responseType: 'blob' });
      console.log(response);

      // Create a blob URL from the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link element and set its attributes
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename); // Use the user-defined filename

      // Append the link to the DOM, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <div>
      <button style={{ background: 'red' }} onClick={downloadFile}>
        Download
      </button>
      {showConfirmation && (
        <ConfirmationDialog
          message="Do you want to download the file?"
          onConfirm={handleConfirmDownload}
        />
      )}
    </div>
  );
};

export default DownloadButton;
