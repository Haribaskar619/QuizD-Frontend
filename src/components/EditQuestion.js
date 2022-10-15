import axios from "axios";
import React, { useEffect, useState } from "react";

const EditQuestion = () => {
    const URL = 'http://localhost:5000';
    const [datas,setDatas] = useState([]);
    const [counter,setCounter] = useState(0);
    const [selected,setSelected] = useState('');
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

      const handleUpdate = async (id) => {
        console.log(id);
        const isUpdated = await axios.put(`${URL}/updateQuestions/${id}`,question).then((res)=>{
            console.log(res);
            setCounter(counter + 1);
        }).catch((err)=> {
            console.log(err);
        })

        if(isUpdated){
            alert('Updated')
        }
    }

    const handleDelete = async (id) => {
        const isDeleted = await axios.delete(`${URL}/deleteQuestions/${id}`).then((res)=>{
            console.log(res);
            setCounter(counter + 1);
        }).catch((err)=> {
            console.log(err);
        })

        if(isDeleted){
            alert('Deleted')
        }
    }

    const handleSelected =  async (item) => {
      await  axios.get(`${URL}/getQuestion/${item}`).then((res)=> {
           setQuestion({
            question: res.data.question,
            option1: res.data.option1,
            option2: res.data.option2,
            option3: res.data.option3,
            option4: res.data.option4,
            answer: res.data.answer,
           })
           console.log(res)
           setSelected(item)
       }).catch((err)=> {
           console.log(err);
       })
    
    }
      
    useEffect(() => {
         axios.get(`${URL}/getQuestions`).then((res)=>{
           setDatas(res.data)
        }).catch((err) => {
            console.log(err);
        })
    },[counter])

  return (
    <>
      <div className="container d-flex mt-5">
        <div className="col-md-8">
          <ul class="list-group">
              {
                  datas?.map((item) =>{
                      return(
                          <>
                        <li class="list-group-item">{item.question}
                        <a className="btn btn-outline-warning" style={{marginLeft:'5%'}} onClick={() =>handleSelected(item._id)}>Edit</a>{" "}
                        <a className="btn btn-outline-danger" style={{marginLeft:'5%'}} onClick={() =>handleDelete(item._id)}>Delete</a>
                        </li>
                          </>
                      )
                  })
              }
          </ul>
        </div>
        <div className="col-md-6">
          <div class="container  mx-auto ">
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
              onClick={() => handleUpdate(selected)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestion;
