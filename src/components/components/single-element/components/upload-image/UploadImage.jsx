import React, { useState, useRef, useEffect } from "react";
import "./UploadImage.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "../../../../../redux/marketingSingleSlice";
import { useLocation } from "react-router-dom";

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const { image } = useSelector((state) => state.marketingSingle);

  const { bannerImage } = useSelector((state) => state.banner);

  useEffect(() => {
    if (image && location.pathname.startsWith("/main/marketing/stock")) {
      setImageUrl(image);
    } else {
      setImageUrl(bannerImage);
    }
  }, [image]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
        dispatch(updateImage(e.target.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="main__upload-image">
      <div className="upload__image-box">
        {imageUrl && (
          <img
            className="uploaded__image"
            width={20}
            src={imageUrl}
            alt="Uploaded"
          />
        )}
      </div>

      <button className="upload__button" onClick={handleButtonClick}>
        Изменить фото
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </button>
    </div>
  );
};

export default UploadImage;
