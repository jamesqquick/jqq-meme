import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  StrongButton,
  StyledButton,
  StyledContainer,
  StyledMain,
} from 'styles/GlobalUtils';
import StyledForm, { StyledField, StyledLabel } from 'styles/Forms';
import { useUser } from '@auth0/nextjs-auth0';
import PremiumMemeControls from 'components/meme/premiumMemeControls';
import axios from 'axios';
import getStripe from 'utils/stripe';
import LoginButton from 'components/auth/loginButton';

export default function MemeGenerator() {
  const [memeText, setMemeText] = useState('');
  const [directions, setDirections] = useState({
    top: 100,
    left: 40,
  });
  const [fontSize] = useState(42);
  const [imageURL, setImageURL] = useState('');
  const { user, isLoading } = useUser();

  const isPremium = user && user.isPremium;
  const availableImages = isPremium ? 5 : 50;
  const canvasRef = useRef(null);

  const downloadMeme = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const canvasDataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.download = 'jqq-meme.png';
    link.href = canvasDataURL;
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = new Image();

    img.src = imageURL;
    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);

      if (!memeText) return;
      const wordsByLine = [];
      const allWords = memeText.split(' ');
      let characterCount = 0;
      let currentLine = 0;
      const MAX_CHARACTERS_PER_LINE = 16;
      let longestLine = 0;
      let longestLineCount = 0;
      for (let i = 0; i < allWords.length; i += 1) {
        const word = allWords[i];

        if (characterCount + word.length > MAX_CHARACTERS_PER_LINE) {
          if (characterCount > longestLineCount) {
            longestLineCount = characterCount;
            longestLine = currentLine;
          }
          currentLine += 1;
          characterCount = word.length;
        } else {
          characterCount += word.length;
        }
        if (!wordsByLine[currentLine]) {
          wordsByLine[currentLine] = [];
        }
        wordsByLine[currentLine].push(word);
      }

      const textWidth = context.measureText(
        wordsByLine[longestLine].join(' ')
      ).width;
      context.fillStyle = 'black';
      context.fillRect(
        directions.left - 25,
        directions.top - 45,
        textWidth + 50,
        wordsByLine.length * 40 + 30
      );

      context.fillStyle = 'white';
      context.fillRect(
        directions.left - 20,
        directions.top - 40,
        textWidth + 40,
        wordsByLine.length * 40 + 20
      );
      context.font = `${fontSize}px Comic Neue`;

      context.fillStyle = 'black';

      wordsByLine.forEach((line, i) => {
        context.fillText(
          line.join(' '),
          directions.left,
          directions.top + 40 * i
        );
      });
    };
  }, [canvasRef, imageURL, memeText, directions, fontSize]);

  const updateDirections = (direction, increment) => {
    if (direction === 'top' && directions[direction] + increment < 100) return;
    if (direction === 'left' && directions[direction] + increment < 40) return;

    const updated = {
      ...directions,
      [direction]: directions[direction] + increment,
    };
    setDirections(updated);
  };

  const shuffleImage = () => {
    const randomImageIndex = Math.floor(Math.random() * availableImages);
    setImageURL(`/images/me/${randomImageIndex}.png`);
  };

  useEffect(() => {
    shuffleImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const upgradeToPremium = async () => {
    const stripe = await getStripe();
    const { data } = await axios.get(`/api/goPremium`);
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <StyledMain>
      <StyledContainer>
        {/* <h1>Meme Generator</h1> */}
        <StyledMeme>
          <StyledButton id="shuffleBtn" onClick={shuffleImage} type="button">
            Shuffle
          </StyledButton>
          <StyledCanvas ref={canvasRef} width="1280" height="720" />
        </StyledMeme>
        <StyledForm>
          <StyledField>
            <StyledLabel htmlFor="memeText">Funny text</StyledLabel>
            <input
              type="text"
              name="memeText"
              value={memeText}
              onChange={(e) => setMemeText(e.target.value)}
            />
          </StyledField>
          {isPremium && (
            <PremiumMemeControls
              downloadMeme={downloadMeme}
              updateDirections={updateDirections}
            />
          )}
          {user && !isPremium && (
            <StyledField>
              <StyledLabel>
                Upgrade for $1 to support James and get access to premium
                controls!
              </StyledLabel>
              <StrongButton type="button" onClick={upgradeToPremium}>
                Create Better Memes!
              </StrongButton>
            </StyledField>
          )}
          {!user && !isLoading && (
            <StyledField>
              <StyledLabel>Login to download your meme!</StyledLabel>
              <LoginButton />
            </StyledField>
          )}
        </StyledForm>
      </StyledContainer>
    </StyledMain>
  );
}

const StyledMeme = styled.div`
  position: relative;
  max-width: 100%;

  #shuffleBtn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 5;
  }
`;
const StyledCanvas = styled.canvas`
  width: 100%;
  border: 10px solid black;
  margin-bottom: 2rem;
`;
