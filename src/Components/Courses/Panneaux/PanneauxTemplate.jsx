import React, { useState, Children, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Flex } from "../../shared/Flex";
import {
  Arrow,
  ChildrenLinks,
  HoverLink,
  SideBar,
  Wrapper,
} from "./template.styles";

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

export default function PanneauxTemplate() {
  const location = useLocation();

  return (
    <Wrapper>
      <SideBar>
        <LinkGroup url="/courses" name="Courses">
          <LinkGroup url="/panneaux" name="Panneaux">
            {panneaux.map((el, key) => {
              const type = el.type.toLowerCase();
              return (
                <HoverLink
                  key={key}
                  to={`/panneaux/${type}`}
                  state={{ type, page: 0 }}
                  selected={location?.state?.type === type}
                >
                  {el.type}
                </HoverLink>
              );
            })}
          </LinkGroup>
          <LinkGroup url="/" name="Priorites">
            <HoverLink to="/">ad</HoverLink>
            <HoverLink to="/">awd</HoverLink>
          </LinkGroup>
        </LinkGroup>
        <HoverLink to="/test">Test</HoverLink>
      </SideBar>
      <Outlet />
    </Wrapper>
  );
}

function LinkGroup({ url, name, children, oldopen }) {
  const [open, setOpen] = useState(false);

  if (oldopen === undefined) oldopen = open;

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
