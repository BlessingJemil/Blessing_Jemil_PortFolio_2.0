import React, { useState } from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ 
  href, 
  target = "_self", 
  label, 
  icon, 
  classes, 
  downloadFile,
  fileName
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleDownload = async (e) => {
    if (!downloadFile) return;
    
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Fetch the file from the specified path
      const response = await fetch(downloadFile);
      
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      // Create a blob URL and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName || 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (href || downloadFile) {
    return (
      <a 
        href={href || "#"} 
        target={target} 
        className={`btn btn-primary ${classes}`}
        onClick={downloadFile ? handleDownload : undefined}
      >
        {isLoading ? 'Downloading...' : label}
        {icon && !isLoading ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : isLoading ? (
          <span className="loading-spinner" aria-hidden="true"></span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  downloadFile: PropTypes.string,
  fileName: PropTypes.string
};

export default ButtonPrimary;