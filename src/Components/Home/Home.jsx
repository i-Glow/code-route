import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../shared/Link";
import { Flex } from "../shared/Flex";
import { Container, SubCtn, TempImg, Wrapper } from "./styles";
import { TbArrowRight } from "react-icons/tb";
import { HiOutlineClipboardList } from "react-icons/hi";
import { GoBook } from "react-icons/go";

export default function Home() {
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    let lp = localStorage.getItem("lastPage");
    lp = JSON.parse(lp);
    if (lp) setLastPage(lp);
  }, []);

  return (
    <Wrapper>
      {!lastPage ? (
        <Flex direction="column" m="0 0 40px 0">
          <h2>Welcome to the route code learning app</h2>
          <p style={{ fontSize: "20px" }}>
            En terminant nos cours, vous connaîtrez différents panneaux routiers
            et priorités des chauffeurs.
          </p>
          <p style={{ fontSize: "20px" }}>
            Vous passerez votre test de plongée avec confiance et une bonne
            connaissance des routes.
          </p>
        </Flex>
      ) : (
        <>
          <h2>Welcome back!</h2>
          <Flex>
            <TempImg />
            <div>
              <h4>Continuez là où vous vous étiez arrêté</h4>
            </div>
          </Flex>
          <Link
            to={lastPage?.path}
            state={{ type: lastPage?.route, page: lastPage?.page }}
          >
            <Flex
              style={{
                color: "var(--dark-blue)",
                textDecoration: "underline",
              }}
            >
              <p>Go to page</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </>
      )}
      <Container onClick={() => navigate("/courses")}>
        <SubCtn>
          <h3>Courses</h3>
          <Flex gap="20px">
            <GoBook style={{ fontSize: "32px" }} />
            <h4>Commencez à découvrir comment fonctionnent les routes</h4>
          </Flex>
          <Link to="/courses">
            <Flex
              style={{ color: "var(--dark-blue)", textDecoration: "underline" }}
            >
              <p>Parcourir les cours</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </SubCtn>
      </Container>
      <Container onClick={() => navigate("/test")}>
        <SubCtn>
          <h3>Driving test</h3>
          <Flex gap="20px">
            <HiOutlineClipboardList style={{ fontSize: "32px" }} />
            <h4>
              Prêt? Vous pouvez commencer à tester ce que vous avez appris ici
            </h4>
          </Flex>
          <Link to="/test">
            <Flex
              style={{ color: "var(--dark-blue)", textDecoration: "underline" }}
            >
              <p>Testez-vous!</p>
              <TbArrowRight />
            </Flex>
          </Link>
        </SubCtn>
      </Container>
    </Wrapper>
  );
}
