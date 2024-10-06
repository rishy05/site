import React from 'react';
import styled from 'styled-components';

const AboutUsSection = styled.section`
  background-color: var(--white);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutUsContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  color: var(--primary-purple);
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  color: var(--primary-blue);
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: var(--text-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const OfferList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const OfferItem = styled.li`
  background-color: var(--primary-purple);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
      <AboutUsContent>
        <Title>About Us</Title>
        <Subtitle>
          "Where your potential skills are converted through internship trainings to embark on a challenging career"
        </Subtitle>
        <Description>
          At PASSINNOVATE solutions, we offer a wide range of IT Services and products, including internship training by seasoned technology professionals. Our expertise spans various sectors such as Banking, Insurance, Healthcare, Retail, Education, and Travel & Leisure. We are dedicated to leveraging your potential skills to help you secure a challenging and rewarding career in the tech industry.
        </Description>
        <OfferList>
          <OfferItem>IT Services</OfferItem>
          <OfferItem>Internship Training</OfferItem>
          <OfferItem>Banking</OfferItem>
          <OfferItem>Insurance</OfferItem>
          <OfferItem>Healthcare</OfferItem>
          <OfferItem>Retail</OfferItem>
          <OfferItem>Education</OfferItem>
          <OfferItem>Travel & Leisure</OfferItem>
        </OfferList>
      </AboutUsContent>
    </AboutUsSection>
  );
};

export default AboutUs;