import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";

const CircularImageUploader = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  // Handle image input change
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle cropping
  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 300, // Adjust canvas size for the cropped image
        height: 300, // Square output, suitable for a circle
      });
      setCroppedImage(canvas.toDataURL()); // Preview the cropped image
    }
  };

  // Submit the image as FormData to the backend
  const handleSubmit = async () => {
    if (croppedImage) {
      const blob = await fetch(croppedImage).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob, "croppedCircleImage.png");

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div>
      <h2>Upload and Crop Circular Image</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {image && (
        <div>
          <h3>Adjust your image:</h3>
          <Cropper
            src={image}
            style={{
              height: 400,
              width: 400,
              borderRadius: "50%",
              overflow: "hidden",
            }}
            // Cropper.js options
            aspectRatio={1} // Keep a square cropper to simulate a circular crop
            guides={false}
            viewMode={1}
            ref={cropperRef}
            background={false} // Remove background to focus on the image
            zoomable={true}
          />
          <button onClick={handleCrop}>Crop Image</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <h3>Cropped Circular Image Preview:</h3>
          {/* Show the cropped image as a circle */}
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={croppedImage}
              alt="Cropped"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <button onClick={handleSubmit}>Submit to Backend</button>
        </div>
      )}
    </div>
  );
};

export default CircularImageUploader;
