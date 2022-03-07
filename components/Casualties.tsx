import moment from "moment";
import styled from "styled-components";
import { CasualtiesInterface } from "../types/Casualties.interface";

const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 12px 24px;
  margin: 4em auto 0 auto;
  max-width: 70%;
`;

const Heading = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Emphasize = styled.span`
  font-weight: 800;
  color: #c0392b;
`;

const Source = styled.p`
  color: #fff;
  a {
    color: #fff;
  }
`;

export default function Casualties(props: CasualtiesInterface) {
  return (
    <>
      <Card>
        <Heading>
          The United Nations has confirmed{" "}
          <Emphasize>{props.casualties.deaths.value}</Emphasize> killed and{" "}
          <Emphasize>{props.casualties.injured.value}</Emphasize> injured
          civilians, bringing the total number of civilian casualties to{" "}
          <Emphasize>{props.casualties.total.value}</Emphasize>.
        </Heading>
        <p>
          These numbers represent UN-confirmed casualties as of{" "}
          {moment(props.casualties.total.date).format("DD MMMM YYYY")}. The real
          figures might be considerably higher, as many reports are still
          pending corroboration from the United Nations.
        </p>
      </Card>
      <Source>
        Source:{" "}
        <a href={props.casualties.total.source} target="_blank">
          OHCHR
        </a>
      </Source>
    </>
  );
}
