"use client";
import { useState } from "react";
import { PaddingContainer } from "@/components/common";
import Image from "next/image";
import { app } from "@/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const storage = getStorage(app);
const db = getFirestore(app);

export default function UploadPhoto() {
  const [previewImage, setPreviewImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!previewImage || !title) return;

    // Upload image to Firebase Storage
    const storageRef = ref(storage, `images/${Date.now()}`);
    await uploadBytes(storageRef, previewImage);

    // Get download URL of uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add title and image URL to Firestore
    const data = await addDoc(collection(db, "images"), {
      title,
      imageUrl,
    });

    console.log(data);

    // Clear input fields
    setPreviewImage(null);
    setTitle("");
  };

  return (
    <PaddingContainer>
      <div className="w-full mt-[80px]">
        <div className="mb-6">
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Input your title here"
            required
          />
        </div>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Preview"
                width={1000}
                height={800}
                className="w-auto h-auto mb-4 max-h-40"
              />
            ) : (
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            )}
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
        <button
          type="button"
          onClick={handleUpload}
          className="text-white w-full  bg-[#329bd0] hover:bg-[#327ed0] mt-[20px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 me-2 mb-2"
        >
          Upload
        </button>
      </div>
    </PaddingContainer>
  );
}
