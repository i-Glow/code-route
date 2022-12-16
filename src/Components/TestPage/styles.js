import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
`;

export const Container = styled.div`
  width: 80%;
  /* max-height: calc(100vh - 200px); */
  margin: 50px auto;
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
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const Table = styled.div`
  width: 75%;
`;

export const Line = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 1fr;
`;

export const Column = styled.div`
  border: 1px solid black;
  display: flex;
  height: 90px;
  padding: 20px;
`;
