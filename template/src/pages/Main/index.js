import React from 'react';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <img
        src="https://devsamurai-materials.s3.amazonaws.com/templates/dev-samurai-white.png"
        height="256"
        alt="Dev Samurai"
      />
      <h1>Fala Samurai!</h1>
      <p>Esse é o template básico da Dev Samurai para React.</p>
    </Container>
  );
}

export default Main;
