import { Wrapper, Container } from "./styles";
import { Fragment, useState } from "react";
import Navigation from "../../shared/Navigation";
import { Flex } from "../../shared/Flex";
import { Button, OutlinedButton } from "../../shared/Button";
import { Items } from "../../../assets/Priorites/Objects";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RouteTree from "../../shared/RouteTree";

export default function Priorite() {
  const location = useLocation();
  const navigate = useNavigate();
  const [Page, setPage] = useState(0);

  const saveLastPage = (page) => {
    localStorage.setItem(
      "lastPage",
      JSON.stringify({ path: "/priorite", page })
    );
  };

  function IncremantePage() {
    if (Page < Items.length - 1) {
      setPage(Page + 1);
    }
  }

  function DecremantePage() {
    if (Page > 0) {
      setPage(Page - 1);
    }
  }

  useEffect(() => {
    setPage(location?.state?.page || 0);
  }, []);

  useEffect(() => {
    saveLastPage(Page);
  }, [Page, location]);

  const conseil = [
    {
      text: "Les intersections dans le code de la route sont le croisement d'une ou plusieurs chaussées. Il en existe plusieurs types et il existe des règles spécifiques à respecter pour bien les franchir.",
    },
    {
      text: "Dans le code de la route, une intersection est le croisement de deux ou plusieurs chaussées. Lorsque l'on arrive aux abords d'une intersection, il est nécessaire, pour agir en sécurité, de prendre en compte les autres usagers et la signalisation de priorité.",
    },
    {
      title: "​Que dit le code de la route pour franchir une intersection ?",
      text: "Pour franchir une intersection, le code de la route dit qu'il faut :\n-​s'assurer que la chaussée est dégagée.\n -faire attention au comportement des autres usagers.\n -respecter les règles de priorité.\n -adapter son allure à la visibilité et à la circulation.\n -analyser et appliquer la règlementation.",
    },
  ];
  return (
    <Wrapper>
      <RouteTree />
      <Container>
        <Navigation title="Priorite" />
        {Page === 0 ? (
          <Flex direction="column" gap="30px" ai="flex-start">
            <h2 style={{ marginBottom: "20px" }}>
              Avant de commencer, voici un conseil:
            </h2>
            {conseil.map((el, key) => (
              <Fragment key={key}>
                <Signs title={el.title} text={el.text} />
              </Fragment>
            ))}
          </Flex>
        ) : (
          <Flex direction="column" ai="flex-start">
            {!Page ? (
              <p>
                À l'approche d'une intersection, le conducteur doit dans un
                premier temps repérer la signalisation présente. Chaque type
                d'intersection possède sa propre signalisation. Si aucune
                indication n'est présente, il faut céder le passage à droite.
              </p>
            ) : null}
            <h1>{Items[Page].title}</h1>
            <p>{Items[Page].description}</p>
            <img
              src={Items[Page].src}
              height="300px"
              style={{ alignSelf: "center" }}
            />
            <p>{Items[Page].txt}</p>
          </Flex>
        )}
        <Flex jc="space-between" m="auto 0 0 0">
          {Page > 0 ? (
            <OutlinedButton onClick={() => DecremantePage()}>
              Previous
            </OutlinedButton>
          ) : (
            <div></div>
          )}
          {Page < Items.length - 1 ? (
            <Button onClick={() => IncremantePage()}>Next</Button>
          ) : (
            <Button onClick={() => navigate("/courses")}>Finish</Button>
          )}
        </Flex>
      </Container>
    </Wrapper>
  );
}

function Signs({ title, text }) {
  function NewlineText(props) {
    const newText = props.split("\n").map((str, key) => <p key={key}>{str}</p>);
    return newText;
  }
  return (
    <div>
      <h3 style={{ lineHeight: "48px" }}>{title}</h3>
      {NewlineText(text)}
    </div>
  );
}
