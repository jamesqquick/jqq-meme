import Link from "next/link";
import Image from 'next/image'
import styled from "styled-components";

// components
import { BuildingOne } from "../components/buildings/buildingOne"
import { BuildingTwo } from "../components/buildings/buildingTwo"
import { BuildingThree } from "../components/buildings/buildingThree"
import { BuildingFour } from "../components/buildings/buildingFour"
import { BuildingFive } from "../components/buildings/buildingFive"
import { BuildingSix } from "../components/buildings/buildingSix"
import { BuildingSeven } from "../components/buildings/buildingSeven"

export default function Home() {
  return (
    <>
      <StyledMain>
        <div className="aside">
          <div className="meme">
            <Image src="/images/meme.jpg" alt="Meme" width={628} height={650} />
            <a href="#" className="download-image">
              Download Image
            </a>
            <div className="starburst">
              <div className="text">
                Submit Your<br />
                Funniest<br />
                James Meme by
                <div className="month">August</div>
                <div className="day">10<sup>th</sup></div>
              </div>
            </div>
          </div>
        </div>
        <div className="caption-this">
          <div className="logo">
            <Image src="/images/logo__jqq.svg" alt="James Q Quick" width={242} height={47} />
          </div>
          <div className="caption-this__wrapper">
            <div className="jqq-style"><Image src="/images/jqq-style.svg" alt="JQQ Style" width={327} height={425} /></div>
            <Image src="/images/heading__caption-this.svg" alt="Caption This" width={606} height={277} />
          </div>
          <div className="meme-maker">
            <strong>Are you a creative meme maker?</strong>
            <br />
            Now is your chance to show your skills!
          </div>
          <form action="">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="field">
              <label htmlFor="name">Email Address</label>
              <input type="text" name="name" />
            </div>
            <div className="field">
              <label htmlFor="name">File Upload</label>
              <input type="text" name="name" />
            </div>
            <div className="field powered-and-submit">
              <div className="powered-by-kwes">
                Powered by
                <Image src="/images/logo__kwes-form@2x.png" alt="KWES Form" width={139} height={31} />
              </div>
              <button>
                <Image src="/images/btn__submit.svg" width={222} height={79} />
              </button>
            </div>
          </form>
        </div>
      </StyledMain>
      <StyledBuildings>
        <BuildingOne className="building-1" />
        <BuildingTwo className="building-2" />
        <BuildingThree className="building-3" />
        <BuildingFour className="building-4" />
        <BuildingFive className="building-5" />

        <BuildingSix className="building-6" />
        <BuildingSeven className="building-7" />
      </StyledBuildings>

      <StyledPrizes>
        <div className="first-place">

        </div>
        <div className="second-place">

        </div>
        <div className="third-place">

        </div>
      </StyledPrizes>


      <StyledClouds>
        <div className="barcode">
          <Image src="/images/barcode@2x.png" width={121} height={238} />
        </div>

        <ul className="social">
          <li>
            <a href="">
              Subscribe on YouTube
            </a>
          </li>
          <li>
            <a href="">
              Follow on Twitter
            </a>
          </li>
          <li>
            <a href="">
              Listen on Compressed.fm
            </a>
          </li>
          <li>
            <a href="">
              Designed by @SelfTeach.me
            </a>
          </li>
          <li>
            <a href="">
              Powered by Kwes Forms
            </a>
          </li>
        </ul>

        <footer>
          COPYRIGHT ©2021 JAMES Q QUICK. ALL RIGHTS RESERVED {" • "}
          <Link href=""><a>DISCLAIMERS</a></Link> {" • "}
          <Link href="#"><a>TERMS AND CONDITIONS</a></Link>
        </footer>

      </StyledClouds>
    </>
  )
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth};
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
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.comic};
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
      font-family: ${props => props.theme.peachyKeen};
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

  .download-image {
    background: ${props => props.theme.black};
    color: ${props => props.theme.cadmiumYellow};
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    font-family: ${props => props.theme.badaboom};
    text-decoration: none;
    font-size: 3rem;
    letter-spacing: 3px;
    padding: 20px 25px;
    position: absolute;
    right: 0;
    bottom: 3px;

    &:hover {
      background: ${props => props.theme.cadmiumYellow};
      color: ${props => props.theme.carmineRed};
    }
  }

  // JQQ Logo
  .logo {
    margin-bottom: 25px;
    text-align: center;
  }

  .caption-this {
    align-items: center;
    display:flex;
    flex-direction: column;

    .jqq-style {
      position: absolute;
      top: 117px;
      left: -145px;
      z-index: 3;
      pointer-events: none;
    }

    // wraps page title -- includes "Caption This" and "JQQ Style"
    &__wrapper {
      display: inline-block;
      margin-bottom: 32px;
      position: relative;
    }
  }

  .meme-maker {
    font-family: ${props => props.theme.comic};
    text-transform: uppercase;
    color: ${props => props.theme.black};
    background: #ABDBD3;
    padding: 16px 52px;
    font-size: 2rem;
    line-height: 2.8rem;
    text-align: center;
    margin-bottom: 22px;
  }

  // field - wraps label and input
  .field {
    margin-bottom: 24px;
    width: 100%;
    text-align: left;
    padding-left: 40px;
    position: relative;
    z-index: 5;
  }

  label {
    font-family: ${props => props.theme.peachyKeen};
    text-transform: uppercase;
    color: ${props => props.theme.black};
    display: block;
    font-size: 2.2rem;
    line-height: 3.2rem;
  }

  input[type="text"] {
    background: url('/images/text-input.svg') left top no-repeat;
    background-size: 542px 77px;
    border: none;
    height: 77px;
    width: 502px;
    font-family: ${props => props.theme.comic};
    font-size: 2.0rem;
    text-transform: uppercase;
    padding: 0 20px;
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
    font-family: ${props => props.theme.comic};
    text-transform: uppercase;
    color: ${props => props.theme.black};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    line-height: 1.2;
    gap: 14px;
  }
`;

const StyledBuildings = styled.section`
  position: relative;
  margin-top: -470px;
  pointer-events: none;

  .building-2 {
    left: -10px;
    position: relative;
  }

  .building-6 {
    bottom: 0;
    position: absolute;
    right: 245px;
    z-index: 1;
  }

  .building-7 {
    bottom: 0;
    position: absolute;
    right: 0;
    z-index: 1;
  }
`;

const StyledPrizes = styled.section`
    background: url('/images/three-frames.svg') center top no-repeat;
    background-size: 100% auto;
    min-height: 550px;
    position: relative;
    margin-top: -85px;
`;

const StyledClouds = styled.section`
  background: url('/images/clouds.svg') center top no-repeat,
    linear-gradient(transparent 0px, transparent 600px, black 600px, black 100%);
  background-size: 100% auto;
  min-height: 1105px;
  position: relative;
  margin-top: -400px;

  .barcode {
    position: absolute;
    left: 0;
    top: 200px;
  }

  .social {
    list-style: none;
    font-family: ${props => props.theme.comic};
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    left: calc((100% - ${props => props.theme.pageWidth}) / 2 );
    bottom: 200px;
    margin: 0;
    padding: 0;
    font-weight: bold;

    li {
      margin-bottom: 25px;
    }

    a {
      color: ${props => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.cadmiumYellow};
        text-decoration: underline;
      }
    }
  }

  footer {
    font-family: ${props => props.theme.comic};
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    bottom: 50px;
    left: calc((100% - ${props => props.theme.pageWidth}) / 2 );

    a {
      color: ${props => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.cadmiumYellow};
        text-decoration: underline;
      }
    }
  }
`;