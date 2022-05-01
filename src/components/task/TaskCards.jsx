import React, { useState } from 'react'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { TaskCard } from './TaskCard'

export const TaskCards = () => {
  const [taskCardsList,setTraskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    }
  ]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map(taskCardList => (
        <TaskCard key={taskCardList.id}/>
      ))}
      <TaskCard />
      <AddTaskCardButton 
        taskCardsList={taskCardsList}
        setTraskCardsList={setTraskCardsList}
      />
    </div>
  );
}
