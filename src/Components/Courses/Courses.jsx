import { useNavigate } from "react-router-dom";
import { Flex } from "../shared/Flex";
import { Card, Container, Wrapper } from "./styles";
import panneaux from "../../assets/PanneauxGenerales/panneaux.png";
import priorite from "../../assets/Priorites/priorite.png";
import Progress from "./Progress";
import Navigation from "../shared/Navigation";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Navigation title="Courses" />
        <Flex jc="space-evenly">
          <Card onClick={() => navigate("/panneaux")}>
            <h3>Panneaux</h3>
            <img src={panneaux} height="100px" alt="panneaux" />
          </Card>
          <Card onClick={() => navigate("/Priorite")}>
            <h3>Priorités</h3>
            <img src={priorite} height="100px" alt="panneaux" />
          </Card>
        </Flex>
      </Container>
    </Wrapper>
  );
}
