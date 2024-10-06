import React from 'react';
import styled from 'styled-components';

const InternshipSection = styled.section`
  background-color: var(--white);
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: var(--primary-purple);
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: var(--text-dark);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ReasonsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ReasonItem = styled.li`
  margin-bottom: 1.5rem;
`;

const ReasonTitle = styled.h3`
  color: var(--primary-blue);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ReasonDescription = styled.p`
  color: var(--text-dark);
  font-size: 1rem;
  line-height: 1.4;
`;

function ITInternship() {
  return (
    <InternshipSection>
      <Content>
        <TextContent>
          <Title>Why Pursue an IT Internship?</Title>
          <Description>
            Internships are a fantastic way to bridge the gap between academic knowledge and real-world experience, especially in the dynamic field of IT.
          </Description>
          <ReasonsList>
            <ReasonItem>
              <ReasonTitle>Hands-On Experience</ReasonTitle>
              <ReasonDescription>
                While degrees in engineering or computer science or related fields hold value, practical experience is equally crucial. Internships allow you to apply what you've learned in the classroom to actual projects and scenarios.
              </ReasonDescription>
            </ReasonItem>
            <ReasonItem>
              <ReasonTitle>CV Enhancement</ReasonTitle>
              <ReasonDescription>
                Internships bulk up your CV (resume) and demonstrate to potential employers that you've not only studied theory but also worked on practical tasks.
              </ReasonDescription>
            </ReasonItem>
            <ReasonItem>
              <ReasonTitle>Industry Insights</ReasonTitle>
              <ReasonDescription>
                You'll gain a better understanding of how the industry operates, its challenges, and the day-to-day tasks faced by IT professionals.
              </ReasonDescription>
            </ReasonItem>
            {/* Add more ReasonItems as needed */}
          </ReasonsList>
        </TextContent>
        <ImageContainer>
          <StyledImage src="internship.png" alt="IT Internship" />
        </ImageContainer>
      </Content>
    </InternshipSection>
  );
}

export default ITInternship;