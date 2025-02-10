"use client";
import { useState } from "react";

const UploadImage = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImageURLs = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages((prevImages) => [...prevImages, ...newImageURLs]);
    }
  };
  const clearAllImages = () => {
    setUploadedImages([]); 
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  const removeImage = (index: number) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-teal-400 to-purple-500 p-5">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Upload Your Images
        </h2>

        <div className="relative">
          <input
            type="file"
            id="file-input"
            hidden
            multiple
            onChange={handleImageChange}
          />
          <label
            htmlFor="file-input"
            className="px-6 py-4 border-2 border-dashed border-teal-500 rounded-md cursor-pointer hover:bg-teal-100 transition duration-300 ease-in-out"
          >
            <span className="text-teal-500 text-lg">
              Click to Upload Images
            </span>
          </label>
          {uploadedImages.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {uploadedImages.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    className="w-full h-32 object-cover rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
                    src={img}
                    alt="Uploaded image"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0 right-0 bg-red-500 min-w-[20px] text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          {uploadedImages.length > 0 && (
            <button
              onClick={clearAllImages}
              className="mt-6 w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
            >
              Remove All Images
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
