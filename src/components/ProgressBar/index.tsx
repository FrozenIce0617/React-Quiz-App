import React from "react";
import styled from "styled-components";

interface IProps {
  max: number;
  current: number;
  score: number;
}

const ProgressBar: React.FC<IProps> = ({ max, current, score }) => {
  const width = (current / max) * 100;
  return (
    <Wrapper>
      <div>
        <QeueWrapper>
          Question {current}/{max}
        </QeueWrapper>
        <BarWrapper>
          <Fill width={width}></Fill>
        </BarWrapper>
      </div>
      <ScoreWrapper>
        <QeueWrapper>Score</QeueWrapper>
        <ScoreValue>{score}</ScoreValue>
      </ScoreWrapper>
    </Wrapper>
  );
};

export default React.memo(ProgressBar);

interface FillProps {
  width: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QeueWrapper = styled.div`
  margin: 5px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: right;
`;

const ScoreValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const BarWrapper = styled.div`
  width: 20rem;
  height: 4rem;
  border: 0.3rem solid white;
`;

const Fill = styled.div<FillProps>`
  height: 3.4rem;
  background-color: white;
  width: ${(p) => p.width}%;
`;
