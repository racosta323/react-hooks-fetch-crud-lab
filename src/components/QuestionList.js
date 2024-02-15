import React from "react";
import QuestionItem from "./QuestionItem";

import { useState, useEffect } from "react";

function QuestionList({handleChange}) {

const [questions, setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(resp => resp.json())
  .then(data => setQuestions(data))
},[])

const question = questions.map(question=>{
  return <QuestionItem key={question.id} question={question} handleChange={handleChange}/>
  }
)
console.log(question)



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
