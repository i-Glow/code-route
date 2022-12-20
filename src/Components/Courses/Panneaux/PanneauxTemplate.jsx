import { Outlet } from "react-router-dom";
import RouteTree from "../../shared/RouteTree";
import { Wrapper } from "./template.styles";

export default function PanneauxTemplate() {
  return (
    <Wrapper>
      <RouteTree />
      <Outlet />
    </Wrapper>
  );
}
