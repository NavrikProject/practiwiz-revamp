import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import "./Test.css";
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
  const ProgressBar = ({ progress }) => {
    const progressBarStyles = {
      height: "20px",
      width: "100%",
      backgroundColor: "#e0e0de",
      borderRadius: "5px",
      overflow: "hidden",
      margin: "20px 0",
    };

    const fillerStyles = {
      height: "100%",
      width: `${progress}%`,
      backgroundColor: progress < 50 ? "#f44336" : "#4caf50", // Red if < 50, Green if >= 50
      borderRadius: "inherit",
      textAlign: "right",
      transition: "width 0.5s ease-in-out",
    };

    const labelStyles = {
      padding: "5px",
      color: "white",
      fontWeight: "bold",
    };

    return (
      <div style={progressBarStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${progress}%`}</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <h2>Progress Bar Example</h2>
      <ProgressBar progress={40} />{" "}
    </>
  );
};

export default CircularImageUploader;
