import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 70%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > :last-child {
    justify-self: flex-end;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* place-items: center; */
  gap: 40px;
  margin: 40px 20px;
`;
