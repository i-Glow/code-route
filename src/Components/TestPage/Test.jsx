import { useEffect, useState } from "react";
import TestAssets from "../../assets/DrivingTest";
import { OutlinedButton } from "../shared/Button";
import { Flex } from "../shared/Flex";
import { Answer, AnswersContainer, Wrapper } from "./styles";

export default function Test() {
  const EACH_ASSET_LENGTH = [5, 0, 3];

  const [assetList, setAssetList] = useState();

  const [selected, setSelected] = useState(-1);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState([]);

  const selectHandler = (value) => {
    if (page < 10 && selected !== -1) {
      setPage((prev) => prev + 1);
      setSelected(-1);
      setAnswers((prev) => [...prev, value]);
    }
  };

  const generateRandomTest = () => {
    const types = ["panneaux", "questions", "priorites"];
    let arr = [];

    for (let i = 0; i < types.length; i++) {
      let nb;

      while (arr.length < EACH_ASSET_LENGTH[i]) {
        nb = Math.floor(Math.random() * TestAssets[types[i]].length);
        if (!TestAssets[types[i]].includes(nb))
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
      <Flex gap="100px" direction="column">
        {page < 10 ? (
          <>
            {!!assetList && (
              <img src={assetList[page]?.img} width="150px" alt="panneau" />
            )}
            <AnswersContainer>
              {[...Array(4).keys()].map((el, key) => (
                <Answer
                  onClick={() => setSelected(key)}
                  selected={key === selected}
                  key={key}
                >
                  A. {el}
                </Answer>
              ))}
            </AnswersContainer>
          </>
        ) : (
          answers.map((el, key) => (
            <div key={key}>
              <span>{el}</span>
              <span>{assetList[key]?.solution}</span>
              <span>
                {el === assetList[key]?.solution ? "correct" : "incorrect"}
              </span>
            </div>
          ))
        )}
        <OutlinedButton onClick={() => selectHandler(selected + 1)}>
          Select
        </OutlinedButton>
      </Flex>
    </Wrapper>
  );
}
