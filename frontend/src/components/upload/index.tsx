import React, { useState } from "react";
import FileUpload from "./FileUpload";
import { uploadFileService } from "../../services/fileService";
import { useNavigate } from "react-router-dom"

const FileUploadContainer: React.FC = () => {
  const navigate = useNavigate()

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (
      !selectedFile.name.endsWith(".xlsx") &&
      !selectedFile.name.endsWith(".csv")
    ) {
      setMessage("Only .xlsx or .csv files allowed");
      return;
    }

    setFile(selectedFile);
    setMessage("");
  };

  const handleUpload = async () => {

    if (!file) {
      setMessage("Please select a file");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await uploadFileService(file);

      setMessage("File uploaded successfully! Processing may take a few moments.");
      setFile(null);
      navigate("/websites")

    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FileUpload
      file={file}
      loading={loading}
      message={message}
      onFileChange={handleFileChange}
      onUpload={handleUpload}
    />
  );
};

export default FileUploadContainer;