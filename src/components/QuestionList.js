import React from "react";
import QuestionItem from "./QuestionItem";

import { useState, useEffect } from "react";

function QuestionList() {


const [questions, setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(resp => resp.json())
  .then(data => setQuestions(data))
},[])

const question = questions.at(question=>question)


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        <QuestionItem question ={question}/>
      </ul>
    </section>
  );
}

export default QuestionList;
