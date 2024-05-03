import styles from "./Quiz.module.css";
import Question from "./Question";
import { useState } from "react";
import { questionsData } from "../data";

const QUESTIONS_COUNT = 10;

const getQuestions = (count) =>
  questionsData.sort(() => Math.random() - 0.5).slice(0, count);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState(getQuestions(QUESTIONS_COUNT));

  const question = questions[currentQuestion];

  const handleOptionSelect = (option) => {
    if (!nextDisabled) return;
    setSelectedOption(option);
    setSubmitDisabled(false);
  };

  const handleSubmit = () => {
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    setNextDisabled(false);
    setSubmitDisabled(true);
  };

  const handleNext = () => {
    setSelectedOption(-1);
    setCurrentQuestion(currentQuestion + 1);
    setSubmitDisabled(true);
    setNextDisabled(true);
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(getQuestions(QUESTIONS_COUNT));
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className={styles.container}>
      {!quizFinished ? (
        <>
          <Question
            question={question}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            nextDisabled={nextDisabled}
          />
          <div className={styles.buttons}>
            <button
              className={styles["submit-btn"]}
              onClick={handleSubmit}
              disabled={submitDisabled}
            >
              Submit
            </button>
            <button
              className={styles["next-btn"]}
              onClick={handleNext}
              disabled={nextDisabled}
            >
              Next
            </button>
          </div>

          <Score score={score} totalQuestions={currentQuestion + 1} />
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </>
      ) : (
        <QuizFinished
          score={score}
          totalQuestions={questions.length}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
};

const Score = ({ score, totalQuestions }) => {
  return (
    <p>
      Your Score: {score}/{totalQuestions}
    </p>
  );
};

const QuizFinished = ({ score, totalQuestions, handleRestart }) => {
  return (
    <div>
      <h2>You finished the Quiz!</h2>
      <Score score={score} totalQuestions={totalQuestions} />
      <button className={styles["restart-btn"]} onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Quiz;
