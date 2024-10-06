import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-image: url('t.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: var(--white);
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent overlay
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>We sharpen your skills for a dream career</HeroTitle>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;