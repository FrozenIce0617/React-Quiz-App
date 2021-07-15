import React from "react";
import styled from "styled-components";
import Button from "./../Button";

interface IProps {
  score: number;
}

const Result: React.FC<IProps> = ({ score = 0 }) => {
  return (
    <ScoreBoard>
      <ScoreWrapper>Your Score: {score}</ScoreWrapper>
      <Button to="/" title="Go Home" />
    </ScoreBoard>
  );
};

export default React.memo(Result);

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScoreWrapper = styled.div`
    margin: 2rem;
    font-size: 3rem;
`