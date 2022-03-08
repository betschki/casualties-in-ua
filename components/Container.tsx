import { ScriptProps } from "next/script";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  flex-basis: auto;

  @media (min-width: 1080px) and (max-width: 1080px) {
    max-width: 80%;
  }
`;

export default function Container(props: ScriptProps) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
