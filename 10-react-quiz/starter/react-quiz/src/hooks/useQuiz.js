import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("Unknow context");
  return context;
}

export default useQuiz;
