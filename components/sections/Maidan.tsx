import YouTube from "react-youtube-embed";
import styled from "styled-components";
import Container from "../Container";

const Section = styled.section`
  background: #ecf0f1;
  padding: 2em 0;
  p {
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  margin: 1em 0 0.25em;
  @media (max-width: 1080px) {
    font-size: 42px;
  }
`;

const VideoWrapper = styled.div`
  width: 50%;
  margin: 2em auto;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export default function MaidanSection() {
  return (
    <Section>
      <Container>
        <H2>This war has not started in 2022</H2>
        <p>
          The full-scale invasion of Ukraine might have started on 24 February
          2022, but this war has been going on since 2014. Why? Because the
          Ukrainian people used their civic rights and stood up against an
          oppressive government, backed by Russia, in the so-called
          "Euromaidan".
        </p>
        <p>
          To understand why we all have to support Ukraine in this fight against
          Russia, we have to understand the sacrifice they have made during
          Euromaidan. Thankfully, Netflix has released a documentary on these
          events for free:
        </p>
        <VideoWrapper>
          <YouTube id="yzNxLzFfR5w" />
        </VideoWrapper>
      </Container>
    </Section>
  );
}
