import React, { useState } from "react";
import styled from "styled-components";

import { Question } from "./../../types/question";

interface IProps {
  currentIndex: number;
  questionInfo: Question;
  onNext: (id: number, isCorrect: boolean) => void;
}

const Quiz: React.FC<IProps> = ({ currentIndex, questionInfo, onNext }) => {
  const { question, answerOptions, answerIndex } = questionInfo;
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNextClick = () => {
    if (selectedIndex < 0) return;
    onNext(currentIndex, answerIndex === selectedIndex);
  };

  return (
    <QuizWrapper>
      <QuestionWrapper>
        Question {currentIndex + 1}: {question}
      </QuestionWrapper>
      <OptonsWrapper>
        {(answerOptions || []).map((option, index) => (
          <Option
            key={index}
            onClick={() => handleOptionClick(index)}
            selected={index === selectedIndex}
          >
            <label>
              Option {index + 1}: {option}
            </label>
          </Option>
        ))}
      </OptonsWrapper>
      <ControlSection>
        <NextButton className="button-link" onClick={handleNextClick}>
          Next
        </NextButton>
      </ControlSection>
    </QuizWrapper>
  );
};

export default React.memo(Quiz);

const QuizWrapper = styled.div`
  width: 100%;
  background-color: #333333;
  border: 5px solid rgba(100, 100, 100, 0.5);
  border-radius: 15px;
`;

const QuestionWrapper = styled.h2`
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-style: italic;
`;

const OptonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface OptionProps {
  selected: boolean;
}

const Option = styled.div<OptionProps>`
  list-style: none;
  padding: 1rem;
  border-top: 1px solid rgba(220, 220, 220, 0.4);
  cursor: hand;
  transition-property: opacity, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease;
  background-color: ${(p) => (p.selected ? "#EEEEEE" : "#333333")};
  color: ${(p) => (p.selected ? "#333333" : "#EEEEEE")};
  :hover {
    background-color: #bbbbbb;
    color: #333333;
  }
`;

const ControlSection = styled.div`
  border-top: 1px solid rgba(220, 220, 220, 0.4);
  margin: auto;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const NextButton = styled.div`
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;
