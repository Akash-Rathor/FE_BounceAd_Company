import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "./DragNdrop.css";
import PopUpAlert from "../Alerts/PopUpAlert";

const DragNdrop = ({ onFilesSelected, width, height, adFormat }) => {
  const [file, setFile] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [acceptedTypes, setAcceptedTypes] = useState('');

  const handleFileChange = event => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      if (acceptedTypes.includes(selectedFiles[0].type)) {
        setFile(selectedFiles[0]);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  };

  const handleDrop = event => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    
    if (droppedFiles.length > 0) {
      const newFile = droppedFiles[0];
      
      // Directly update the file without confirmation
      if (acceptedTypes.includes(newFile.type)) {
        setFile(newFile);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  };
  

  const handleRemoveFile = () => {
    setFile(null);
    setIsVisible(false);
  };

  useEffect(() => {
    const acceptedType = adFormat === 'Inside Cab Video Ads' ? ["video/mp4", "video/mov", "video/x-matroska", "video/x-msvideo"] : ["image/png", "image/jpeg"];
    setAcceptedTypes(acceptedType)
  }, [adFormat])

  useEffect(() => {
    if (file) {
      onFilesSelected(file);
    } else {
      onFilesSelected('');
    }
  }, [file, onFilesSelected]);

  return (
    <>
      {isVisible &&
      <PopUpAlert
        title='Invalid File format'
        message='Unsupported file type. Please select a file of the supported type.'
        okayText='Okay'
        okayColor='red-600'
        setClickOkay={() => setIsVisible(false)}
        setIsVisible={setIsVisible}
      /> }
      <section className="drag-drop" style={{ width: width, height: height }}>
        <div
          className={`document-uploader ${file ? "upload-box active" : "upload-box"}`}
          onDrop={handleDrop}
          onDragOver={event => event.preventDefault()}
        >
          <>
            {!file && (
              <div className="upload-info">
                <AiOutlineCloudUpload />
                <div>
                  <p>Drag and drop your Advertisement file here</p>
                  <p>Limit {adFormat === 'Inside Cab Video Ads' ? '15 MB' : '5 MB'} per file.<br />Supported formats:  {adFormat === 'Inside Cab Video Ads' ? ".mp4, .mov, .mkv, .avi" : '.png, .jpg, .jpeg'}
                  </p>
                </div>
              </div>
            )}
            <input
              type="file"
              hidden
              id="browse"
              onChange={handleFileChange}
              accept={adFormat === 'Inside Cab Video Ads' ? ".mp4,.mov,.mkv,.avi" : '.png,.jpg,.jpeg'}
            />
            <label htmlFor="browse" className="browse-btn font-bold text-primary">
              Browse files
            </label>
          </>

          {file && (
            <div className="file-list">
              <div className="file-list__container">
                <div className="file-item">
                  <div className="file-info">
                    <p>{file.name}</p>
                  </div>
                  <div className="file-actions">
                    <MdClear onClick={handleRemoveFile} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {file && (
            <div className="success-file">
              <AiOutlineCheckCircle style={{ color: "#6DC24B", marginRight: 1 }} />
              <p>1 file selected</p>
            </div>
          )}
        </div>
      </section>
      </>
  );
};

export default DragNdrop;
