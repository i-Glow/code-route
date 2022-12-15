import styled from "styled-components";

export const Flex = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  gap: ${({ gap }) => (gap ? gap : "10px")};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;
