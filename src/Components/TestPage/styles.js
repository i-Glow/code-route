import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const AnswersContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 20px;
`;

export const Answer = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  border: 2px solid
    ${({ selected }) => (selected ? "var(--blue)" : "transparent")};
  transition: 0.2s ease;
`;
