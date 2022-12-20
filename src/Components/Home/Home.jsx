import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../shared/Link";
import { Flex } from "../shared/Flex";
import { Container, SubCtn, TopCont, Wrapper } from "./styles";
import { TbArrowRight, TbSteeringWheel } from "react-icons/tb";
import {
  HiOutlineClipboardList,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import { GoBook } from "react-icons/go";
import { Button } from "../shared/Button";

export default function Home() {
  const navigate = useNavigate();
  const [lastPage, setLastPage] = useState(null);

  let steeringRef = useRef();

  useEffect(() => {
    function angle(cx, cy, ex, ey) {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;

      return deg;
    }

    const rekt = steeringRef.current.getBoundingClientRect();

    const fnc = (e) => {
      if (steeringRef.current) {
        const angleDeg = angle(
          e.clientX,
          e.clientY,
          rekt.left + rekt.width / 2,
          rekt.top + rekt.height / 2
        );

        steeringRef.current.style.transform = `rotate(${-90 + angleDeg}deg)`;
      }
    };

    window.addEventListener("mousemove", (e) => fnc(e));

    return window.removeEventListener("mousemove", (e) => fnc(e));
  }, []);

  useEffect(() => {
    let lp = localStorage.getItem("lastPage");
    lp = JSON.parse(lp);
    if (lp) setLastPage(lp);
  }, []);

  return (
    <Wrapper>
      <TopCont direction="column" gap="40px">
        {!lastPage ? (
          <>
            <h2>Bienvenue dans l'application d'apprentissage du code</h2>
            <p style={{ fontSize: "20px" }}>
              En terminant nos cours, vous connaîtrez différents panneaux
              routiers et priorités des chauffeurs.
            </p>
            <p style={{ fontSize: "20px" }}>
              Vous passerez votre test de plongée avec confiance et une bonne
              connaissance des routes.
            </p>
            <a href="#links">
              <Button>
                <HiOutlineChevronDoubleDown />
                <HiOutlineChevronDoubleDown />
              </Button>
            </a>
          </>
        ) : (
          <>
            <h2>Welcome back!</h2>
            <Flex>
              <h4>Perdez aucun temps, sautez là où vous vous étiez arrêté</h4>
            </Flex>
            <Button
              onClick={() =>
                navigate(lastPage?.path, {
                  state: { type: lastPage?.route, page: lastPage?.page },
                })
              }
            >
              <Flex>
                <p>Allez au page</p>
              </Flex>
            </Button>
          </>
        )}
        <div ref={steeringRef}>
          <TbSteeringWheel style={{ fontSize: "128px" }} />
        </div>
      </TopCont>
      <Container id="links" onClick={() => navigate("/courses")}>
        <SubCtn>
          <h3>Cours</h3>
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
          <h3>Examen de conduite</h3>
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
