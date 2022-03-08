import moment from "moment";
import { useRef } from "react";
import styled from "styled-components";
import Casualties from "../components/Casualties";
import Container from "../components/Container";
import { CasualtiesInterface } from "../types/Casualties.interface";
import { exportStory } from "./api/export";

const Main = styled.main`
  align-items: center;
  background: linear-gradient(0deg, #f1c40f 50%, #2980b9 50%);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`;

const H1 = styled.h1`
  color: #fff;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    letter-spacing: 0;
    font-size: 40px;
    margin: 1em 0;
  }
  @media (min-width: 1080px) and (max-width: 1081px) {
    font-size: 96px;
    text-align: left;
  }
`;

const Yellow = styled.span`
  color: #f1c40f;
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  height: 4em;
  text-align: center;
  border: none;
  font-size: 18px;
  background: #2c3e50;
  color: #fff;
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
      <Main ref={exportRef}>
        <Container>
          <H1>
            Russia's unprovoked invasion against Ukraine is going on for{" "}
            <Yellow>{daysSinceInvasion()}</Yellow> days
          </H1>
        </Container>
        <Container>
          <Casualties casualties={props.casualties}></Casualties>
        </Container>
      </Main>
      <DownloadSection>
        <Button
          onClick={() =>
            exportStory(
              exportRef.current,
              `casualties-in-ua_${moment().format("YYYY-MM-DD")}`
            )
          }
        >
          Click to download for Instagram Story
        </Button>
      </DownloadSection>
    </>
  );
}
