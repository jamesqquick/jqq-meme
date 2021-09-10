import { UserProvider } from '@auth0/nextjs-auth0';
import Clouds from 'components/clouds';
import Nav from 'components/nav/nav';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Theme from '../styles/Theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <title>JQQ Meme Competition</title>
            </Head>
            <GlobalStyle />
            <UserProvider>
                <Nav />

                <Component {...pageProps} />
                <Clouds />
            </UserProvider>
        </ThemeProvider>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  /* Badaboom */
  @font-face {
    font-family: 'badaboom';
    src: url('/fonts/badaboom/badabb__-webfont.woff2') format('woff2'),
         url('/fonts/badaboom/badabb__-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, html > body, body {
    color: ${(props) => props.theme.white};
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) =>
        props.theme.black} url('/images/bg.jpg') center top no-repeat;
    background-size: 100% auto;
    min-height: 100vh;
    width: 100%;
  }

  svg {
    fill: currentColor;
  }
`;
