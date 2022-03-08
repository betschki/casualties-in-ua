import moment from "moment";
import styled from "styled-components";
import { CasualtiesInterface } from "../types/Casualties.interface";

const StyledCasualties = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 3em 2em 2em;
  margin: 0em auto 0 auto;
  max-width: 100%;
  @media (min-width: 1080px) and (max-width: 1081px) {
    padding: 4.5em 4em;
    text-align: left;
    border-radius: 24px;
    margin-top: -6em;
  }
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 1080px) and (max-width: 1081px) {
    font-size: 54px;
    font-weight: 800;
    color: #2c3e50;
  }
`;

const Disclaimer = styled.p`
  @media (min-width: 1080px) and (max-width: 1081px) {
    font-size: 38px;
  }
`;

const Emphasize = styled.span`
  font-weight: 800;
  color: #c0392b;
`;

const Source = styled.p`
  a {
    color: #2c3e50;
  }
  @media (min-width: 1080px) and (max-width: 1081px) {
    font-size: 32px;
    text-align: left;
    color: #2c3e50;
    a {
      color: #2c3e50;
    }
  }
`;

export default function Casualties(props: CasualtiesInterface) {
  return (
    <>
      <StyledCasualties>
        <Card>
          <Heading>
            The United Nations has confirmed{" "}
            <Emphasize>{props.casualties.deaths.value}</Emphasize> killed and{" "}
            <Emphasize>{props.casualties.injured.value}</Emphasize> injured
            civilians, bringing the total number of civilian casualties to{" "}
            <Emphasize>{props.casualties.total.value}</Emphasize>.
          </Heading>
          <Disclaimer>
            These numbers represent UN-confirmed casualties as of{" "}
            {moment(props.casualties.total.date).format("DD MMMM YYYY")}. The
            real figures might be considerably higher, as many reports are still
            pending corroboration from the United Nations.
          </Disclaimer>
        </Card>
        <Source>
          Source:{" "}
          <a href={props.casualties.total.source} target="_blank">
            OHCHR
          </a>{" "}
          / <a href="https://casualties.in.ua">casualties.in.ua</a>
        </Source>
      </StyledCasualties>
    </>
  );
}
