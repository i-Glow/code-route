import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 15%) 1fr;
`;

//Side Bar
export const SideBar = styled.div`
  margin: 10vh auto;
`;

export const HoverLink = styled(Link)`
  text-decoration: none;
  color: ${({ selected }) => (selected ? "var(--navy)" : "black")};
  display: block;
  margin-left: 15px;
  opacity: ${({ selected }) => (selected ? 1 : 0.6)};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const ChildrenLinks = styled.div`
  margin-left: 10px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  height: ${({ open }) => (open ? "fit-content" : "0px")};
`;

export const Arrow = styled(TiArrowSortedDown)`
  cursor: pointer;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.2s ease-in-out;
  opacity: 0.6;
  font-size: 14px;
  color: #242424;
  margin-right: -15px;
`;
