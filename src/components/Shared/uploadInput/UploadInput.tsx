import { useState } from "react";

interface UploadInputProps {
  label: string;
  value: string | null;
  onChange: (file: File | null) => void;
}

const UploadInput: React.FC<UploadInputProps> = ({
  label,
  value,
  onChange,
}) => {
  const [preview, setPreview] = useState<string | null>(value);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    } else {
      setPreview(null);
      onChange(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 ">
        {label && <p className="text-sm font-bold">{label}</p>}
        <label
          className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-slate-100 cursor-pointer hover:bg-gray-200"
          style={{ height: "36px" }}
        >
          {preview ? (
            <span className="ml-2 text-base leading-normal">
              Select another image
            </span>
          ) : (
            <span className="ml-2 text-base leading-normal">
              Select an image
            </span>
          )}
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {preview && <img src={preview} alt="Preview" className="h-20 mt-2" />}
      </div>
    </div>
  );
};

export default UploadInput;
