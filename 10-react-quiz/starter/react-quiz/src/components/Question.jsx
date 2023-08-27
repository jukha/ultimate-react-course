import useQuiz from "../hooks/useQuiz";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        question={question}
        // dispatch={dispatch}
        // answer={answer}
      />
    </div>
  );
}

export default Question;
