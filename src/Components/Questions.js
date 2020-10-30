import React, { useState } from "react";

const Questions = ({ question, option, selected }) => {
  const [answer, setAnswer] = useState(option);
  return (
    <div className="questionBox">
      <div className="question">
        <span>Q: </span>
        {question}
      </div>
      <hr />
      {answer.map((text, index) => (
        <div>
          <button key={index} className="btn btn-light" onClick={() => {
            setAnswer([text]);
            selected(text);
          }}>
            {text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Questions;
