import React from 'react';
import { Container, Title, TitleSmall, Img } from './HomePage.styled';
import BackgroundImage from '../../images/pngegg.png';

function HomePage() {
  return (
    <Container>
      <Title>Welcome to our delivery app!</Title>
      <TitleSmall>
        Here you can fast and easy order your favorite food
      </TitleSmall>
      <Img src={BackgroundImage} alt="delivery" width="720px" />
    </Container>
  );
}

export default HomePage;
