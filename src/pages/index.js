import Image from 'next/image';
import styled from 'styled-components';

// components

import { useEffect } from 'react';
import StyledForm, { StyledField, StyledLabel } from 'styles/Forms';
import { StrongLink } from 'styles/GlobalUtils';
import Clouds from 'components/clouds';
import Prizes from 'components/prizes';
import Buildings from 'components/buildings/buildings';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // kwesforms.init();
  }, []);

  return (
    <>
      <StyledMain>
        <div className="aside">
          <div className="meme">
            <Image src="/images/meme.jpg" alt="Meme" width={628} height={650} />
            <Link href="/generator" passHref>
              <StrongLink>Create Meme</StrongLink>
            </Link>
            <div className="starburst">
              <div className="text">
                Submit Your
                <br />
                Funniest
                <br />
                James Meme by
                <div className="month">August</div>
                <div className="day">
                  10<sup>th</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="caption-this">
          <div className="logo">
            <Image
              src="/images/logo__jqq.svg"
              alt="James Q Quick"
              width={242}
              height={47}
            />
          </div>
          <div className="caption-this__wrapper">
            <div className="jqq-style">
              <Image
                src="/images/jqq-style.svg"
                alt="JQQ Style"
                width={327}
                height={425}
              />
            </div>
            <Image
              src="/images/heading__caption-this.svg"
              alt="Caption This"
              width={606}
              height={277}
            />
          </div>
          <div className="meme-maker">
            <strong>Are you a creative meme maker?</strong>
            <br />
            Now is your chance to show your skills!
          </div>
          <StyledForm
            className="kwes-form"
            action="https://kwes.io/api/foreign/forms/wmocA1KiTbmqhemuXfny"
            no-error-message="true"
          >
            <StyledField>
              <StyledLabel htmlFor="fullName">Name</StyledLabel>
              <input
                type="text"
                name="fullName"
                id="fulLName"
                rules="required|max:255"
              />
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor="email">Email Address</StyledLabel>
              <input type="text" name="email" id="email" rules="email" />
            </StyledField>
            <StyledField>
              <StyledLabel htmlFor="meme">File Upload</StyledLabel>
              <input type="file" name="meme" rules="image|required" />
            </StyledField>
            <StyledField className="powered-and-submit">
              <div className="powered-by-kwes">
                Powered by
                <Image
                  src="/images/logo__kwes-form@2x.png"
                  alt="Kwes Form"
                  width={139}
                  height={31}
                />
              </div>
              <button type="submit">
                <Image src="/images/btn__submit.svg" width={222} height={79} />
              </button>
            </StyledField>
          </StyledForm>
        </div>
      </StyledMain>
      <Buildings />
      <Prizes />
      <Clouds />
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${(props) => props.theme.pageWidth};
  padding-top: 25px;
  width: 100%;

  // red banner at the top
  &:before {
    background: url('/images/red-header.png') center bottom no-repeat;
    background-size: cover;
    content: '';
    display: block;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  .meme {
    text-align: right;
    position: relative;
  }

  .starburst {
    background: url('/images/speech-bubble.svg') left top no-repeat;
    bottom: -210px;
    color: ${(props) => props.theme.black};
    font-family: ${(props) => props.theme.comic};
    font-style: italic;
    height: 367px;
    left: -115px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    width: 390px;
    z-index: 10;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: bold;

    // tilt and positioning the text
    .text {
      top: 103px;
      transform: rotate(-7.5deg);
      left: 94px;
      position: absolute;
    }

    .month,
    .day {
      font-family: ${(props) => props.theme.peachyKeen};
      font-size: 4.4rem;
      line-height: 1;
      font-style: normal;
    }

    .day {
      margin-left: 10px;
    }

    sup {
      font-size: 1.8rem;
      position: relative;
      margin-top: -5px;
    }
  }

  // JQQ Logo
  .logo {
    margin-bottom: 25px;
    text-align: center;
  }

  .caption-this {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;

    .jqq-style {
      position: absolute;
      top: 185px;
      left: -120px;
      z-index: 3;
      pointer-events: none;
    }

    // wraps page title -- includes "Caption This" and "JQQ Style"
    & __wrapper {
      display: inline-block;
      margin-bottom: 32px;
      position: relative;
    }
  }

  .meme-maker {
    font-family: ${(props) => props.theme.comic};
    text-transform: uppercase;
    color: ${(props) => props.theme.black};
    background: #abdbd3;
    padding: 16px 52px;
    font-size: 2rem;
    line-height: 2.8rem;
    text-align: center;
    margin-bottom: 22px;
  }

  .powered-and-submit {
    display: flex;
    justify-content: space-between;
    width: 550px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .field > .powered-by-kwes {
    font-family: ${(props) => props.theme.comic};
    text-transform: uppercase;
    color: ${(props) => props.theme.black};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    line-height: 1.2;
    gap: 14px;
  }
`;
