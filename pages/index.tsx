import styled from "styled-components";
import Casualties from "../components/Casualties";
import Container from "../components/Container";
import { CasualtiesInterface } from "../types/Casualties.interface";

const Header = styled.header`
  align-items: center;
  align-content: center;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/img/background.jpg");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  color: #fff;
  @media (max-width: 768px) {
    margin: 1.5em 0 0;
    font-size: 32px;
    letter-spacing: 0;
  }
`;

const Yellow = styled.span`
  color: #f1c40f;
`;

function daysSinceInvasion(): number {
  return Math.ceil(
    (new Date().getTime() - new Date("2022/02/24").getTime()) /
      (1000 * 60 * 60 * 24)
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://raw.githubusercontent.com/reliefweb/crisis-app-data/v1/edition/world/main.json`
  );
  const data = await res.json();
  const filtered = data.filter((item: any) => item.name === "Ukraine");

  const casualties = {
    total: {
      date: filtered[0].figures[7].values[0].date,
      value: filtered[0].figures[7].values[0].value,
      source: filtered[0].figures[7].values[0].url,
    },
    injured: {
      date: filtered[0].figures[9].values[0].date,
      value: filtered[0].figures[9].values[0].value,
      source: filtered[0].figures[9].values[0].url,
    },
    deaths: {
      date: filtered[0].figures[8].values[0].date,
      value: filtered[0].figures[8].values[0].value,
      source: filtered[0].figures[8].values[0].url,
    },
  };

  console.log(casualties);

  return {
    props: { casualties },
    revalidate: 60 * 60 * 6,
  };
}

export default function Home(props: CasualtiesInterface) {
  return (
    <>
      <Header>
        <Container>
          <H1>
            Russia's unprovoked invasion against Ukraine is going on for{" "}
            <Yellow>{daysSinceInvasion()}</Yellow> days
          </H1>
        </Container>
        <Casualties casualties={props.casualties} />
      </Header>
    </>
  );
}
