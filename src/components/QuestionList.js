import React from "react";
import QuestionItem from "./QuestionItem";



function QuestionList({handleChange, questions, handleDelete, handleInputChange}) {

  const question = questions.map(each=>{
    return <QuestionItem key={each.id} question={each} handleChange={handleChange} handleDelete={handleDelete} handleInputChange={handleInputChange}/>
    }
  )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        { question }
      </ul>
    </section>
  );
}

export default QuestionList;
