import styled from "styled-components";

const Base = styled.button`
  height: ${({ h }) => (h ? h : "40px")};
  width: ${({ w }) => (w ? w : "auto")};
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  padding: 3px 25px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;
`;

export const Button = styled(Base)`
  background-color: ${({ bg }) => (bg ? bg : "var(--dark-blue)")};
  color: ${({ text }) => (text ? text : "white")};
  border: 1px solid transparent;

  &:hover {
    color: var(--dark-blue);
    border-color: var(--dark-blue);
    background-color: white;
  }
`;

export const OutlinedButton = styled(Base)`
  background-color: ${({ bg }) => (bg ? bg : "white")};
  color: ${({ text }) => (text ? text : "var(--dark-blue)")};
  border: 1px solid var(--dark-blue);
  border-color: ${({ border }) => (border ? border : "var(--dark-blue)")};

  &:hover {
    background-color: ${({ bg }) => (bg ? bg : "var(--dark-blue)")};
    color: ${({ text }) => (text ? text : "white")};
    border: 1px solid transparent;
  }
`;
