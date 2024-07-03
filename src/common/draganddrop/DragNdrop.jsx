import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "./DragNdrop.css";

const DragNdrop = ({ onFilesSelected, width, height }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
    }
  };

  const handleDrop = event => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFile(droppedFiles[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  useEffect(() => {
    if (file) {
      onFilesSelected(file);
    } else {
      onFilesSelected('');
    }
  }, [file, onFilesSelected]);

  return (
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
                <p>
                  Limit 15MB per file.<br />Supported formats: MP4, MOV, MKV, AVI
                </p>
              </div>
            </div>
          )}
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".mp4,.mov,.mkv,.avi"
          />
          <label htmlFor="browse" className="browse-btn">
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
  );
};

export default DragNdrop;
