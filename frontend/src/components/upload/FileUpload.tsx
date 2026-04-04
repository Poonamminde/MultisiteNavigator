import React from "react";

interface Props {
  file: File | null;
  loading: boolean;
  message: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
}

const FileUpload: React.FC<Props> = ({
  file,
  loading,
  message,
  onFileChange,
  onUpload
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Upload Excel / CSV
        </h2>

        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-500 transition">

          <span className="text-gray-500 mb-2">
            Click to select file
          </span>

          <span className="text-sm text-gray-400">
            (.xlsx or .csv) and ensure it has a "url" column with valid website URLs.
          </span>

          <input
            type="file"
            accept=".xlsx,.csv"
            onChange={onFileChange}
            className="hidden"
          />
        </label>

        {file && (
          <div className="mt-4 text-sm text-gray-700">
            Selected file:
            <span className="font-medium ml-1">{file.name}</span>
          </div>
        )}

        <button
          onClick={onUpload}
          disabled={loading}
          className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

      </div>
    </div>
  );
};

export default FileUpload;