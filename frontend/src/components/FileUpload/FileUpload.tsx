import React, {useRef, useState} from 'react';

interface FileUploadProps {
  onFile: (file: File) => Promise<void>;
}

const FileUpload: React.FC<FileUploadProps> = ({onFile}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const showFileSelect = () => {
    if (!inputRef.current) {
      return;
    }

    if (isUploading) {
      return;
    }

    inputRef.current.click();
  }

  const handleUploadClick = async () => {
    if (!selectedFile) {
      return;
    }
    
    setIsUploading(true);
    await onFile(selectedFile);
    setIsUploading(false);
    setSelectedFile(null);
  };

  return (
    <div>
      <input accept='*/dicom,.dcm, image/dcm, */dcm, .dicom' ref={inputRef} type="file" onChange={handleFileChange} style={{
        display: 'none',
      }}/>
      <button disabled={isUploading} onClick={showFileSelect}>Select File</button>
      <button onClick={handleUploadClick} disabled={!selectedFile || isUploading}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
