import styled from "styled-components";
import { Flex } from "../shared/Flex";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
`;

export const TopCont = styled(Flex)`
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 400px;
  box-shadow: var(--box-shadow);
  font-size: 28px;
  padding: 20px;
  background-color: var(--winter);
`;

export const Container = styled.div`
  width: 80%;
  max-width: 1080px;
  height: 220px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;

export const SubCtn = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & > :last-child {
    align-self: flex-end;
  }
  cursor: pointer;
`;

export const TempImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--beige);
  border-radius: 8px;
`;
