import React, { useState } from 'react';
import StyledForm, { StyledField, StyledLabel } from 'styles/Forms';
import Image from 'next/image';
import axios from 'axios';

export default function MemeForm() {
    const [formData, setFormData] = useState();
    const [title, setTitle] = useState('');

    const onChangeHandler = (e) => {
        if (!e.target.files?.length) {
            return;
        }
        const file = e.target.files[0];
        const tempFormData = new FormData();
        tempFormData.append(e.target.name, file);
        setFormData(tempFormData);
    };
    const uploadImage = async (e) => {
        e.preventDefault();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                console.log(
                    `Current progress:`,
                    Math.round((event.loaded * 100) / event.total)
                );
            },
        };
        formData.set('title', title);
        try {
            const response = await axios.post(
                '/api/createMeme',
                formData,
                config
            );
            //TODO: display success message
            //TODO: how to wipe out selected file
            setTitle('');
            setFormData(null);
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
                    <Image
                        src="/images/btn__submit.svg"
                        width={222}
                        height={79}
                    />
                </button>
            </StyledField>
        </StyledForm>
    );
}
