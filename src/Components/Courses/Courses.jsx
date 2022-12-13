import { useNavigate } from "react-router-dom";
import { Flex } from "../shared/Flex";
import { Card, Container, Wrapper } from "./styles";
import panneaux from "../../assets/PanneauxGenerales/panneaux.png";
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
            <img src={panneaux} alt="panneaux" />
            <Progress pg={4} total={4} />
          </Card>
          <Card>
            Priorite
            <Progress pg={5} total={18} />
          </Card>
        </Flex>
      </Container>
    </Wrapper>
  );
}
