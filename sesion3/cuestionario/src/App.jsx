import { useState } from "react";
import "./App.css";
import questions from "./questions.json";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const handleOptionChange = (questionIndex, optionIndex) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: optionIndex,
    }));
    // console.log('Selected Answers:', selectedAnswers);
  };
  const handleSubmit = () => {
    let totalScore = 0;
    questionsData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        totalScore += 2;
        console.log(`Question ${index + 1}: Correct!`);
      }
      // cselectedAnswers[index]onsole.log(`Question ${index + 1}: Selected Option = ${selectedAnswers[index]}, Correct Option = ${question.correctAnswer}`);
    });
    setScore(totalScore);
  };

  return (
    <>
      <section id="center">
        <h1>Encuesta</h1>
        {questionsData.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  checked={selectedAnswers[index] === optionIndex}
                  onChange={() => handleOptionChange(index, optionIndex)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit}>Enviar</button>
        {score !== null && <p>Tu puntaje es: {score}</p>}
      </section>
    </>
  );
}

export default App;
