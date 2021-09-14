import Image from 'next/image';
import styled from 'styled-components';

// components

import { StrongLink, StyledMain } from 'styles/GlobalUtils';
// import Clouds from 'components/clouds';
// import Prizes from 'components/prizes';
// import Buildings from 'components/buildings/buildings';
import Link from 'next/link';
import { Breakpoints } from 'styles/Breakpoints';
import { useUser } from '@auth0/nextjs-auth0';
import MemeForm from 'components/meme/memeForm';
import LoginButton from 'components/auth/loginButton';
import MemeGallery from 'components/meme/gallery';
// import MemeGallery from 'components/meme/gallery';

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <>
      <StyledMain>
        <StyledHome>
          <div className="aside">
            <div className="meme">
              <Image
                src="/images/meme.jpg"
                alt="Meme"
                width={628}
                height={650}
              />

              <Link href="/generator" passHref>
                <StrongLink>Create Meme</StrongLink>
              </Link>
              {/* <div className="starburst">
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
                        </div> */}
            </div>
          </div>
          <div className="caption-this">
            {/* <div className="logo">
                        <Image
                            src="/images/logo__jqq.svg"
                            alt="James Q Quick"
                            width={242}
                            height={47}
                        />
                    </div> */}
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
            {!user && !isLoading && (
              <LoginButton text="Login to Submit a Meme" />
            )}
            {user && <MemeForm />}
          </div>
          {/* <MemeGallery /> */}
        </StyledHome>
      </StyledMain>

      {/* <Prizes /> */}
    </>
  );
}

const StyledHome = styled.div`
  @media (${Breakpoints.large}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .meme {
    position: relative;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 80px;

    .jqq-style {
      position: absolute;
      top: 115px;
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
`;
