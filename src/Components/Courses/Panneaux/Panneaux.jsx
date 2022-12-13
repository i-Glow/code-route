import { useNavigate } from "react-router-dom";
import { Flex } from "../../shared/Flex";
import {
  Card,
  Confirm,
  Container,
  Seperator,
  SignShapes,
  Wrapper,
} from "./styles";
import {
  BsFillTriangleFill,
  BsFillCircleFill,
  BsSquareFill,
} from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { Fragment, useState } from "react";
import danger from "../../../assets/PanneauxGenerales/danger.png";
import interdiction from "../../../assets/PanneauxGenerales/interdiction.png";
import obligation from "../../../assets/PanneauxGenerales/obligation.png";
import indication from "../../../assets/PanneauxGenerales/indication.png";
import { useEffect } from "react";
import Navigation from "../../shared/Navigation";

export default function Panneaux() {
  const navigate = useNavigate();
  const [showShapes, setShowShapes] = useState(false);

  async function updateShow(value) {
    setShowShapes(value);
    localStorage.setItem("showShapes", value);
  }

  const signs = [
    {
      icon: <BsFillTriangleFill />,
      title: "Danger",
      text: "les panneaux triangulaires, dont la fonction est de prévenir d'un danger plus ou moins proche",
    },
    {
      icon: <BsFillCircleFill />,
      title: "Ordre",
      text: "les panneaux ronds, dont la fonction est de donner un ordre (prescription) : il peut s'agir d'une interdiction, les panneaux ronds peuvent également exprimer une obligation",
    },
    {
      icon: <BsSquareFill />,
      title: "Indication",
      text: "les panneaux de forme carrée, dont la fonction est d'exprimer une indication, ou permettent également d'informer les usagers",
    },
    {
      icon: null,
      title: "Les panneaux de priorité",
      text: "Il existe un certain nombre d’éléments de prescription routiers influant sur la priorité des usagers sur une voie de circulation donnée",
    },
  ];

  const panneaux = [
    {
      type: "Dangers",
      img: danger,
    },
    {
      type: "Interdictions",
      img: interdiction,
    },
    {
      type: "Obligations",
      img: obligation,
    },
    {
      type: "Indications",
      img: indication,
    },
  ];

  useEffect(() => {
    const value = localStorage.getItem("showShapes") === "false" ? false : true;
    setShowShapes(value);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Navigation title="Panneaux" />
        {showShapes ? (
          <SignShapes>
            <h3 style={{ marginBottom: "20px" }}>
              Before you start there are forms of road signs:
            </h3>
            {signs.map((el, key) => (
              <Fragment key={key}>
                <Signs icon={el.icon} title={el.title} text={el.text} />
                {key !== signs.length - 1 ? <Seperator /> : null}
              </Fragment>
            ))}
            <Confirm onClick={() => updateShow(false)}>Got it</Confirm>
          </SignShapes>
        ) : (
          <SignShapes sm={true}>
            <h3>Sign shapes</h3>
            <Flex
              style={{ cursor: "pointer" }}
              onClick={() => updateShow(true)}
            >
              <p>expand</p>
              <TiArrowSortedDown />
            </Flex>
          </SignShapes>
        )}
        <Flex gap="20px" direction="column">
          {panneaux.map((el, key) => (
            <Card
              onClick={() =>
                navigate(el.type.toLowerCase(), {
                  state: {
                    type: el.type.toLowerCase(),
                  },
                })
              }
              key={key}
            >
              <Flex gap="5px" jc="start">
                <p>Les panneaux</p>
                <h4>{el.type}</h4>
                <img height="60px" src={el.img} alt={el.type} />
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Wrapper>
  );
}

function Signs({ icon, title, text }) {
  return (
    <div>
      <Flex style={{ fontSize: "32px", gap: "20px" }}>
        {icon}
        <h4>{title}</h4>
      </Flex>
      <p>{text}</p>
    </div>
  );
}
