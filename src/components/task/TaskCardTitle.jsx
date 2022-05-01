import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTtile,setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) =>{
    setInputCardTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className="taskCardTitleInput"
          autoFocus 
          type="text" 
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputCardTtile}
          maxLength="10"
          />
        </form>) : <h3>{inputCardTtile}</h3>}
      
    </div>
  )
}
