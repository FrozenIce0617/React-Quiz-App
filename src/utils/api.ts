export const fetchQuestions = () => {
  return fetch(`http://localhost:3001/quizQuestions`).then((res) => res.json());
};
