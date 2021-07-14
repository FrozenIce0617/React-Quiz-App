import React from "react";
import styled from "styled-components";

const QuizWrapper = styled.div`
  width: 100%;
  background-color: #333333;
  border: 5px solid rgba(100, 100, 100, 0.5);
  padding: 15px;
  margin: 10px;
  border-radius: 15px;
`;

const Question = styled.h2`
  padding: 0.5rem 2.5rem 1.5rem 2.5rem;
`;

const OptonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  padding: 5px;
`;

interface IProps {
  question: string;
  answerOptions: string[];
}

const Quiz: React.FC<IProps> = ({ question, answerOptions }) => {
  return (
    <QuizWrapper>
      <Question>{question}</Question>
      <OptonsWrapper>
        {answerOptions.map((option) => (
          <Option>
            <label>{option}</label>
          </Option>
        ))}
      </OptonsWrapper>
    </QuizWrapper>
  );
};

export default React.memo(Quiz);
