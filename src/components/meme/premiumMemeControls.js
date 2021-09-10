import React from 'react';
import styled from 'styled-components';
import { StyledField, StyledLabel } from 'styles/Forms';
import { StrongButton, StyledButton } from 'styles/GlobalUtils';

export default function PremiumMemeControls({
    downloadMeme,
    updateDirections,
}) {
    return (
        <>
            <StyledField>
                <StyledLabel>Text Position</StyledLabel>
                <StyledButtonControls>
                    <StyledButton
                        onClick={() => {
                            updateDirections('top', -20);
                        }}
                        type="button"
                    >
                        Up
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            updateDirections('top', 20);
                        }}
                        type="button"
                    >
                        Down
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            updateDirections('left', -20);
                        }}
                        type="button"
                    >
                        Left
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            updateDirections('left', 20);
                        }}
                        type="button"
                    >
                        Right
                    </StyledButton>
                </StyledButtonControls>
            </StyledField>
            <StrongButton onClick={downloadMeme}>Download Meme</StrongButton>
        </>
    );
}

const StyledButtonControls = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
`;
