import React from "react";

function QuestionItem({ question, handleDelete, handleInputChange }) {
 
  const { id, prompt, answers, correctIndex } = question;
  
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleInputChange}>{options}</select>
      </label>
      <button onClick={handleDelete} value={id}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
