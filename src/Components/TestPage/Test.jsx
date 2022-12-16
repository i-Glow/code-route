import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestAssets from "../../assets/DrivingTest";
import { Button, OutlinedButton } from "../shared/Button";
import { Flex } from "../shared/Flex";
import {
  Answer,
  AnswersContainer,
  Column,
  Container,
  Line,
  Table,
  Wrapper,
} from "./styles";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

export default function Test() {
  const EACH_ASSET_LENGTH = [7, 3];
  const navigate = useNavigate();

  const [assetList, setAssetList] = useState();

  const [selected, setSelected] = useState(-1);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState([]);

  const selectHandler = (value) => {
    if (page < 10 && selected !== -1) {
      setAnswers((prev) => [...prev, value - 1]);
      setPage((prev) => prev + 1);
      setSelected(-1);
    } else {
      navigate("/");
    }
  };

  const generateRandomTest = () => {
    const types = ["panneaux", "priorites"];
    let arr = [];
    let total = 0;

    for (let i = 0; i < types.length; i++) {
      let nb;
      total += EACH_ASSET_LENGTH[i];

      while (arr.length < total) {
        nb = Math.floor(Math.random() * TestAssets[types[i]].length);

        if (!arr.includes(TestAssets[types[i]][nb]))
          arr.push(TestAssets[types[i]][nb]);
      }
    }

    setAssetList(arr);
  };

  useEffect(() => {
    generateRandomTest();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Flex direction="column">
          {page < 10 ? (
            <>
              {!!assetList &&
                (page < EACH_ASSET_LENGTH[0] ? (
                  <img src={assetList[page]?.img} width="150px" alt="panneau" />
                ) : (
                  <img
                    src={assetList[page]?.img}
                    height="300px"
                    alt="priorite"
                  />
                ))}
              <AnswersContainer style={{ margin: "80px 0 40px 0" }}>
                {!!assetList &&
                  assetList[page].choices?.map((el, key) => (
                    <Answer
                      onClick={() => setSelected(key)}
                      selected={key === selected}
                      key={key}
                    >
                      <Flex ai="start">
                        <h4>{key + 1}.</h4>
                        <p>{el}</p>
                      </Flex>
                    </Answer>
                  ))}
              </AnswersContainer>
            </>
          ) : (
            <Table>
              <Line>
                <Column>
                  <h2>Votre Reponse</h2>
                </Column>
                <Column>
                  <h2>Solution</h2>
                </Column>
                <Column></Column>
              </Line>
              {answers.map((el, key) => (
                <Line key={key}>
                  <Column>{assetList[key]?.choices[el]}</Column>
                  <Column>
                    {assetList[key]?.choices[assetList[key]?.solution]}
                  </Column>
                  <Column>
                    <Flex w="100%">
                      {el === assetList[key]?.solution ? (
                        <BsFillCheckCircleFill
                          style={{ color: "green", fontSize: "22px" }}
                        />
                      ) : (
                        <BsFillXCircleFill
                          style={{ color: "red", fontSize: "22px" }}
                        />
                      )}
                    </Flex>
                  </Column>
                </Line>
              ))}
            </Table>
          )}
          {page < 10 ? (
            <OutlinedButton onClick={() => selectHandler(selected + 1)}>
              Select
            </OutlinedButton>
          ) : (
            <Button
              style={{ margin: "40px 0" }}
              onClick={() => selectHandler(selected + 1)}
            >
              Finish
            </Button>
          )}
        </Flex>
      </Container>
    </Wrapper>
  );
}
