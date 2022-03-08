import { ScriptProps } from "next/script";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  @media (min-width: 1080px) and (max-width: 1080px) {
    max-width: 80%;
  }
`;

export default function Container(props: ScriptProps) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
