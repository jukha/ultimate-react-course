import useQuiz from "../hooks/useQuiz";

function StartScreen() {
  const { totalQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{totalQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
