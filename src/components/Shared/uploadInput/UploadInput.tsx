import { useState } from "react";

interface UploadInputProps {
  label: string;
}

const UploadInput: React.FC<UploadInputProps> = ({ label }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-[36px] bg-slate-100">
        {fileName && <span className="mr-4">{label}</span>}
        <label
          className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white cursor-pointer hover:bg-gray-200"
          style={{ height: "36px" }}
        >
          {/* <svg
          className="w-6 h-6 text-blue-500"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.4 10.55a1 1 0 0 0-1.64-.95l-3 2.75V5a1 1 0 1 0-2 0v7.35l-3-2.75a1 1 0 0 0-1.4 1.4l4.5 4.1a1 1 0 0 0 1.4 0l4.5-4.1a1 1 0 0 0 .14-1.4z" />
        </svg> */}
          {!fileName && (
            <span className="ml-2 text-base leading-normal">
              Select an image
            </span>
          )}
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {fileName && <p className="ml-4 text-lg">{fileName}</p>}
      </div>
    </div>
  );
};

export default UploadInput;
