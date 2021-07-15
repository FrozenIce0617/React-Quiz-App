import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchQuestions } from "../../utils/api";
import { shuffleArray } from "../../utils/helper";
import Quiz from "../../components/Quiz";
import { Question } from "../../types/question";
import Result from "../../components/Result";
import ProgressBar from "../../components/ProgressBar";

const MAX_QUIZ_COUNT = 3;

const Test = () => {
  const [loading, setLoading] = useState(true);
  const [quetstions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchQuestions().then((questions) => {
      setQuestions(shuffleArray(questions));
      setLoading(false);
    });
  }, []);

  const handleOnNext = (index: number, isCorrect: boolean = false) => {
    console.log(index, isCorrect);
    isCorrect && setScore(score + 1);
    if (index >= MAX_QUIZ_COUNT) {
      setFinished(true);
    } else {
      setCurrentIndex(index + 1);
    }
  };

  return (
    <TestWrapper>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {finished ? (
            <Result score={score} />
          ) : (
            <>
              <ProgressBar
                max={MAX_QUIZ_COUNT + 1}
                current={currentIndex + 1}
                score={score}
              />
              <QuizWrapper>
                <Quiz
                  currentIndex={currentIndex}
                  questionInfo={quetstions[currentIndex]}
                  onNext={handleOnNext}
                />
              </QuizWrapper>
            </>
          )}
        </>
      )}
    </TestWrapper>
  );
};

export default React.memo(Test);

const TestWrapper = styled.div`
  width: 75%;
  margin: 1rem auto;
`;

const QuizWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
