import { Icon } from 'components/icon';
import Link from 'next/link';
import Image from 'next/image';

import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';

export default function Clouds() {
  return (
    <StyledClouds>
      <div className="barcode">
        <Image src="/images/barcode@2x.png" width={121} height={238} />
      </div>

      <ul className="social">
        <li>
          <a
            href="http://youtube.com/c/jamesqquick"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="youtube" />
            Subscribe on YouTube
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com/jamesqquick"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="twitter" />
            Follow on Twitter
          </a>
        </li>
        <li>
          <a href="http://compressed.fm" target="_blank" rel="noreferrer">
            <Icon name="listen" />
            Listen on Compressed.fm
          </a>
        </li>
        <li>
          <a href="http://selfteach.me" target="_blank" rel="noreferrer">
            <Icon name="designed" />
            Designed by @SelfTeach.me
          </a>
        </li>
        <li>
          <a href="http://kwes.io" target="_blank" rel="noreferrer">
            <Icon name="powered" />
            Powered by Kwes Forms
          </a>
        </li>
      </ul>

      <footer>
        COPYRIGHT ©2021 JAMES Q QUICK. ALL RIGHTS RESERVED {' • '}
        <Link href="/disclaimers">
          <a>DISCLAIMERS</a>
        </Link>{' '}
        {' • '}
        <Link href="/terms-and-conditions">
          <a>TERMS AND CONDITIONS</a>
        </Link>
      </footer>
    </StyledClouds>
  );
}

const StyledClouds = styled.section`
  background: url('/images/clouds.svg') center top no-repeat,
    linear-gradient(transparent 0px, transparent 600px, black 600px, black 100%);
  background-size: 100% auto;
  min-height: 740px;
  position: relative;
  margin-top: -250px;
  z-index: 20;
  @media (${Breakpoints.medium}) {
    min-height: 1105px;
  }
  @media (${Breakpoints.regular}) {
    margin-top: -430px;
  }
  .barcode {
    display: none;
    position: absolute;
    left: 0;
    top: 200px;
    @media (${Breakpoints.medium}) {
      display: block;
    }
  }
  .social {
    list-style: none;
    font-family: ${(props) => props.theme.comic};
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    left: 50px;
    bottom: 125px;
    margin: 0;
    padding: 0;
    font-weight: bold;
    li {
      margin-bottom: 25px;
    }
    a {
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover {
        color: ${(props) => props.theme.cadmiumYellow};
        text-decoration: underline;
      }
      svg {
        margin-right: 10px;
      }
    }
  }
  footer {
    font-family: ${(props) => props.theme.comic};
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    bottom: 50px;
    left: 50px;
    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;
      &:hover {
        color: ${(props) => props.theme.cadmiumYellow};
        text-decoration: underline;
      }
    }
  }
`;
