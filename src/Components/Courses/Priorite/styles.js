import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Card = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;
export const Container = styled.div`
  width: 1080px;
  height: 100vh;
  padding: 50px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const SignShapes = styled(Card)`
  padding: ${({ sm }) => (sm ? "20px" : "40px")};
  display: flex;
  flex-direction: ${({ sm }) => (sm ? "row" : "column")};
  justify-content: space-between;
  align-items: ${({ sm }) => (sm ? "center" : "")};
  gap: 20px;
  transition: height 0.2s ease-in-out;
  cursor: default;
`;
export const Confirm = styled.button`
  background-color: var(--dark-blue);
  border: 1px solid transparent;
  color: white;
  border-radius: 4px;
  padding: 3px 25px;
  outline: none;
  align-self: flex-end;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--dark-blue);
    border-color: var(--dark-blue);
    background-color: transparent;
  }
`;
export const Seperator = styled.div`
  height: 1px;
  width: 80%;
  background-color: var(--beige);
  align-self: center;
  margin: 30px 0;
`;
export const Image = styled.div`
  height:200px;
  width:300px
`