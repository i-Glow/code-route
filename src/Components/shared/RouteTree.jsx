import React, { Children, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import { Flex } from "./Flex";
import { useState } from "react";

//Side Bar
export const SideBar = styled.div`
  margin: 15vh auto;
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

const panneaux = [
  {
    type: "Dangers",
  },
  {
    type: "Interdictions",
  },
  {
    type: "Obligations",
  },
  {
    type: "Indications",
  },
];

export default function RouteTree() {
  const location = useLocation();

  return (
    <SideBar>
      <LinkGroup url="/courses" name="Courses">
        <LinkGroup url="/panneaux" name="Panneaux">
          {panneaux.map((el, key) => {
            const type = el.type.toLowerCase();
            return (
              <HoverLink
                key={key}
                to={`/panneaux/${type}`}
                state={{ type, page: 0, oldopen: true }}
                selected={location?.state?.type === type}
              >
                {el.type}
              </HoverLink>
            );
          })}
        </LinkGroup>
        <HoverLink
          selected={location?.pathname === "/priorite"}
          state={{ oldopen: true }}
          to="/priorite"
        >
          Priorites
        </HoverLink>
      </LinkGroup>
      <HoverLink to="/test">Test</HoverLink>
    </SideBar>
  );
}

function LinkGroup({ url, name, children, oldopen }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  if (oldopen === undefined) oldopen = open;
  useEffect(() => {
    if (location?.state?.oldopen) setOpen(true);
  }, []);

  return (
    <div>
      <Flex
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
        jc="start"
        gap="0px"
      >
        <Arrow open={open} />
        <HoverLink to={url}>{name}</HoverLink>
      </Flex>
      <ChildrenLinks open={oldopen && open}>
        {Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { oldopen });
          }
          return child;
        })}
      </ChildrenLinks>
    </div>
  );
}
