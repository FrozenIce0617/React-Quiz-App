import React from "react";
import styled from "styled-components";
import Button from "./../Button";

interface IProps {
  score: number;
}

const Result: React.FC<IProps> = ({ score = 0 }) => {
  return (
    <ScoreBoard>
      <ScoreWrapper>Score: {score}</ScoreWrapper>
      <PersonalityWrapper>
        Your personality trait is
        <TraitWrapper>{score < 3 ? " introvert" : " extrovert"}</TraitWrapper>
      </PersonalityWrapper>
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
`;

const PersonalityWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const TraitWrapper = styled.span`
  font-style: Italic;
  font-size: 3rem;
  font-weight: bold;
`;
