import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import Global from '../styles/Global';
import theme from '../styles/theme';

import Header from '../components/Header/Header';

const Container = styled.div`
  width: 100vw;
  min-width: 280px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <>
        <Container>
          <Global />
          <Head>
            <title>Tanzeel</title>
            <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Header darkMode={darkMode} toggleDarkMode={setDarkMode} />
          </main>
        </Container>
      </>
    </ThemeProvider>
  );
}
