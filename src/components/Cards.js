import React, { useState, useEffect } from "react";
import axios from "axios";


const Cards = () => {
  const [index,setIndex] = useState(0)
  const [datas, setDatas] = useState([]);
  const [selectedItem, setselectedItem] = useState('')
  const URL = 'http://localhost:5000'

  const handleSelected = (item) => {
    console.log(item);
     setselectedItem(item)
  }

  const handleCompare = (answer) => {
    if(answer === selectedItem){
      alert('Correct')
      setIndex(index + 1)
    }else{
      alert('wrong')
    }
  }
  
  useEffect(() => {
    axios
      .get( process.env.REACT_APP_BASE_URL+`getQuestions`)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index]);

  return (
    <>
    <div className="col-md-4 mx-auto" style={{ marginTop: "8%" }}>
    <div class="card">
              <div class="card-body CardQuiz">
                {
                  
                datas[index]? <>
                
                <h5 class="card-title">{datas[index]?.question}</h5>
                <p class="card-text">
                  <div class="form-check" onClick={() => handleSelected(datas[index]?.option1)}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="option1"
                      value={datas[index]?.option1}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      {datas[index]?.option1}
                    </label>
                  </div>
                </p>
                <p class="card-text">
                  <div class="form-check" onClick={() => handleSelected(datas[index]?.option2)}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option2}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      {datas[index]?.option2}
                    </label>
                  </div>
                </p>
                <p class="card-text">
                  <div class="form-check" onClick={() => handleSelected(datas[index]?.option3)}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option3}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      {datas[index]?.option3}
                    </label>
                  </div>
                </p>
                <p class="card-text">
                  <div class="form-check" onClick={() => handleSelected(datas[index]?.option4)}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option4}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      {datas[index]?.option4}
                    </label>
                  </div>
                </p>
                <div className="col-md-4 mx-auto">
                <a href="#" class="btn btn-primary" onClick={() => {handleCompare(datas[index]?.answer)}}>
                  Next
                </a>
                </div>
                </>:
                <>
                <p className="text-success">Congrats You Have Successfully Completed the Quiz !!!</p>
                <a href="#" className="btn-btn-primary" onClick={() => {setIndex(0)}}>Try Again</a>
                </>
                  }
              </div>
            </div>
    </div>    
          </>
  );
};

export default Cards;
