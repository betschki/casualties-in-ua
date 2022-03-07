import { ScriptProps } from "next/script";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
`;

export default function Container(props: ScriptProps) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
