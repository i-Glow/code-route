import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 1080px;
  height: 100%;
  padding: 50px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Card = styled.div`
  width: 35%;
  aspect-ratio: 2 / 1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.15s ease-in-out;
  & > * {
    margin-bottom: 15px;
  }

  &:hover {
    transform: scale(103%);
    border: 1px solid gray;
  }
`;

export const ProgressBackground = styled.div`
  height: 3px;
  width: 100px;
  background-color: var(--beige);
  border-radius: 8px;
`;

export const ProgressLine = styled.div`
  width: ${({ w }) => w * 100}px;
  height: 3px;
  background-color: var(--dark-blue);
  border-radius: 8px;
`;

export const ProgressPercentage = styled.h5`
  color: var(--dark-blue);
`;
