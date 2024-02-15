import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("List");

 
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestions(data))
  },[])

 


  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.answer1);


    const jsonBody = {
      "prompt": formData.prompt,
      "answers": [
        formData.answer1, 
        formData.answer2, 
        formData.answer3, 
        formData.answer4
      ],
      "correctIndex": formData.id
    }

    fetch("http://localhost:4000/questions",{
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(jsonBody)
    })
    .then(resp => resp.json())
    .then(data => onAddQuestion(data))
  }

  function onAddQuestion(newQuestion){
    setQuestions(oldQuestions => [...oldQuestions, newQuestion])
    setFormData({
      prompt: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      correctIndex: 0,
    })

  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleChange={handleChange} formData={formData} handleSubmit={handleSubmit}/> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;
