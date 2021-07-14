import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchQuestions } from "../../utils/api";
import Quiz from "../../components/Quiz";

const TestWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Test = () => {
  const [quetstions, setQuestions] = useState([]);
  useEffect(() => {
    fetchQuestions().then((questions) => {
      console.log({ questions });
      setQuestions(questions);
    });
  }, []);

  return (
    <TestWrapper>
      {(quetstions || []).map((question, index) => (
        <Quiz key={index} {...question} />
      ))}
    </TestWrapper>
  );
};

export default React.memo(Test);
