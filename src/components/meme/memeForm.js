import React, { useState } from 'react';
import StyledForm, { StyledField, StyledLabel } from 'styles/Forms';
import Image from 'next/image';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';
import { getSupabase } from 'utils/supabase';
import { uid } from 'uid';

export default function MemeForm() {
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const { user } = useUser();
  const { supabaseToken } = user;

  const onChangeHandler = (e) => {
    if (!e.target.files?.length) {
      return;
    }
    setFile(e.target.files[0]);
  };
  const uploadImage = async (e) => {
    e.preventDefault();
    if (!file) return;
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1];
    const fileName = `${uid(16)}.${fileExtension}`;
    const supabase = getSupabase(supabaseToken);
    const { data: uploadedImage, error } = await supabase.storage
      .from('memes')
      .upload(fileName, file, {
        cacheControl: '3600',
      });
    if (error) {
      console.error(error);
      return;
    }
    const imageURL = uploadedImage.Key;
    const body = {
      imageURL,
      title,
    };
    try {
      const response = await axios.post('/api/memes', body);
      // TODO: display success message
      // TODO: how to wipe out selected file
      setTitle('');
      setFile(null);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <StyledForm onSubmit={uploadImage}>
      <StyledField>
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledField>
      <StyledField>
        <StyledLabel htmlFor="meme">File Upload</StyledLabel>
        <input type="file" name="meme" onChange={onChangeHandler} />
      </StyledField>
      <StyledField className="powered-and-submit">
        <button type="submit">
          <Image src="/images/btn__submit.svg" width={222} height={79} />
        </button>
      </StyledField>
    </StyledForm>
  );
}
