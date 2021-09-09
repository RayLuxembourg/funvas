import React, { ChangeEventHandler, useRef } from 'react';
import { InsertPhotoTwoTone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addImg } from '../Canvas';

export default function ImageUploadButton() {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgObj = new Image();

      imgObj.src = event.target?.result as string;

      imgObj.onload = () => {
        dispatch(addImg(imgObj));
      };
    };

    if (e.target.files) {
      const file = e.target.files.item(0) as File;
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <IconButton color="primary" onClick={fileInputRef.current?.click}>
        <InsertPhotoTwoTone width="100%" />
        <input onChange={onFileChange} style={{ display: 'none' }} ref={fileInputRef} type="file" />

      </IconButton>
    </>
  );
}
