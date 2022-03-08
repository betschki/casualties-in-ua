import { useRef } from "react";
import styled from "styled-components";
import Casualties from "../components/Casualties";
import Container from "../components/Container";
import { CasualtiesInterface } from "../types/Casualties.interface";
import { exportStory } from "./api/export";

const Header = styled.header`
  align-items: center;
  align-content: center;
  aspect-ratio: 9/16;
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
  const total = filtered[0].figures.filter(
    (item: any) =>
      item.name === "Civilian Casualties since 24 Feb 2022 (killed & injured)"
  );
  const injured = filtered[0].figures.filter(
    (item: any) => item.name === "Civilians Injured since 24 Feb 2022"
  );
  const deaths = filtered[0].figures.filter(
    (item: any) => item.name === "Civilians Killed since 24 Feb 2022"
  );

  const casualties = {
    total: {
      date: total[0].date,
      value: total[0].value,
      source: total[0].url,
    },
    injured: {
      date: injured[0].date,
      value: injured[0].value,
      source: injured[0].url,
    },
    deaths: {
      date: deaths[0].date,
      value: deaths[0].value,
      source: deaths[0].url,
    },
  };

  return {
    props: { casualties },
    revalidate: 60 * 60 * 6,
  };
}

export default function Home(props: CasualtiesInterface) {
  const exportRef = useRef<any>();

  return (
    <>
      <Header ref={exportRef}>
        <Container>
          <H1>
            Russia's unprovoked invasion against Ukraine is going on for{" "}
            <Yellow>{daysSinceInvasion()}</Yellow> days
          </H1>
        </Container>
        <Casualties casualties={props.casualties} />
      </Header>
      <button onClick={() => exportStory(exportRef.current, "test")}>
        Capture Image
      </button>
    </>
  );
}
