import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </div>
  );
};

export default TaskList;
