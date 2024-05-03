import styles from "./Question.module.css";

const Question = ({
  question,
  selectedOption,
  handleOptionSelect,
  nextDisabled,
}) => {
  const getSelectedClass = (index) => {
    if (index === selectedOption) {
      if (index === question.answer) {
        return styles.correct;
      } else {
        return styles.wrong;
      }
    }

    if (index === question.answer) {
      return styles.correct;
    }

    return "";
  };

  return (
    <>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div
          key={index}
          className={`${styles.option} ${
            selectedOption === index ? styles.selected : ""
          } ${nextDisabled ? "" : getSelectedClass(index)}`}
          onClick={() => handleOptionSelect(index)}
        >
          {option}
        </div>
      ))}
    </>
  );
};

export default Question;
