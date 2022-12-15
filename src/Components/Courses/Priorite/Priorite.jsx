import { Wrapper, SignShapes, Container, Confirm, Seperator,Image } from "./styles";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import Navigation from "../../shared/Navigation";
import { Flex } from "../../shared/Flex";
import { TiArrowSortedDown } from "react-icons/ti";
import { Button } from "../../shared/Button";
import { Items } from "./Objects";
export default function Priorite() {
  const navigate = useNavigate();
  const [showShapes, setShowShapes] = useState(false);

  async function updateShow(value) {
    setShowShapes(value);
    localStorage.setItem("showIntersectionTips", value);
  }
  const ItemsLopped = Items.map((Element) => (
    <Flex>
      <h1>{Element.title}</h1>
      <p>{Element.description}</p>
      <img src={Element.src} />
      <p> {Element.txt} </p>
    </Flex>
  ));
  const [Page, setPage] = useState(0);
  function IncremantePage(){
    if(Page < Items.length-1){
      setPage(Page+1);
    } 
  }
  function DecremantePage(){
    if(Page > 0){
      setPage(Page-1);
    } 
  }
  const consiel = [
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
      <Container>
        <Navigation title="Priorite" />
        {showShapes ? (
          <SignShapes>
            <h3 style={{ marginBottom: "20px" }}>
              Avant de commance un petit consiel:
            </h3>
            {consiel.map((el, key) => (
              <Fragment key={key}>
                <Signs icon={el.icon} title={el.title} text={el.text} />
                {key !== consiel.length - 1 ? <Seperator /> : null}
              </Fragment>
            ))}
            <Confirm onClick={() => updateShow(false)}>Got it</Confirm>
          </SignShapes>
        ) : (
          <SignShapes sm={true}>
            <h3>Aborder une intersection</h3>
            <Flex
              style={{ cursor: "pointer" }}
              onClick={() => updateShow(true)}
            >
              <p>expand</p>
              <TiArrowSortedDown />
            </Flex>
          </SignShapes>
        )}
        <div>
          {!Page ? <p>
            À l'approche d'une intersection, le conducteur doit dans un premier
            temps repérer la signalisation présente. Chaque type d'intersection
            possède sa propre signalisation. Si aucune indication n'est
            présente, il faut céder le passage à droite.
          </p> : null}
          <h1>{Items[Page].title}</h1>
          <p>{Items[Page].description}</p>
          <img src={Items[Page].src} />
          <p>{Items[Page].txt}</p>
          
        </div>
        <Flex jc="space-between">
          {Page > 0 ? <Button onClick={() => DecremantePage()}>Previous</Button> : <div></div> }
          {Page < 3 ? <Button onClick={() => IncremantePage()}>Next</Button> : <div></div> } 
        </Flex >
      </Container>
    </Wrapper>
  );
}

function Signs({ icon, title, text }) {
  function NewlineText(props) {
    const newText = props.split("\n").map((str) => <p>{str}</p>);
    return newText;
  }
  return (
    <div>
      <Flex style={{ fontSize: "32px", gap: "20px" }}>
        {icon}
        <h4>{title}</h4>
      </Flex>
      <p>{NewlineText(text)}</p>
    </div>
  );
}
