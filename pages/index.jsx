import Head from 'next/head';
import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Container = styled.div`
  width: 100%;    
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-content: center;

  div.grid-cell:nth-of-type(1) {
    width: 100%;
    height: 100%;
  }

  div.grid-cell:nth-of-type(2) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1; 

    div {
      flex: 1;
      width: auto;
      height: 100%;
    }
  }
  
  @media only screen and (min-width: 902px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    

    div.grid-cell:nth-of-type(2) {
      grid-column: 2;
      div {
        width: 100%;
        height: auto;
      }
    }
  }

`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tanzeel</title>
        <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cell" />
      <div className="grid-cell">
        <Player
          autoplay
          loop
          src="/lottie/working.json"
        />
      </div>
    </Container>
  );
}
