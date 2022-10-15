import React, { useState } from "react";
import axios from "axios";

const CreateQuestion = () => {
  
  const [question, setQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    // console.log(question);
    const createData = await axios
      .post("http://localhost:5000/createQuestions", question)
      .then((res) => {
        console.log(res);
        alert("Question Created and stored");
      })
      .catch((err) => {
        console.log(err);
      });

    if (createData) {
      setQuestion({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "", 
      });
    }
  };

  return (
    <>
      <div class="container col-md-4 mx-auto mt-5">
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            value={question.question}
            onChange={handleChange}
            placeholder="Enter Question"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="option1"
            name="option1"
            value={question.option1}
            onChange={handleChange}
            placeholder="Enter option 1"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="option2"
            name="option2"
            value={question.option2}
            onChange={handleChange}
            placeholder="Enter option 2"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="option3"
            name="option3"
            value={question.option3}
            onChange={handleChange}
            placeholder="Enter option 3"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="option4"
            name="option4"
            value={question.option4}
            onChange={handleChange}
            placeholder="Enter option 4"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            id="answer"
            name="answer"
            value={question.answer}
            onChange={handleChange}
            placeholder="Enter Answer"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleCreate()}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateQuestion;
