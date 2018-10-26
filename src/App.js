import React, { Component } from 'react';
import star from './star.svg';
import styled, { keyframes } from 'styled-components';
import blob from './blob.png';

const flicker = keyframes`
  0% {
    opacity: 0;
  }
  24% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg), scale(.85);
  }
  25% {
    transform: rotate(200deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-200deg);
  }
`;

const Name = styled.div`
  margin: auto;
  text-align: center;
  display: block;
  text-transform: uppercase;
  font-family: 'Archivo Narrow', sans-serif;
  font-weight: bold;
  font-size: 6rem;
  animation: ${flicker}  infinite 2s;
  animation-repeat: loop;
`;

const Logo = styled.img`
  display: block;
  min-width: 400px;
  max-width: 750px;
  height: auto;
  margin: auto;
  position: absolute;
`;

const Ball = styled.img`
  display: block;
  min-width: 400px;
  max-width: 750px;
  height: auto;
  margin: auto;
  position: absolute;
  transform: scale(0.6);
  z-index: -2;
  animation: ${rotation} linear infinite 30s;
  animation-repeat: loop;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  left: 35vw;
  top: 25vh;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Content>
            <Logo src={star} />
            <Ball src={blob} />
            <Name>
              Gabi
            </Name>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App;
