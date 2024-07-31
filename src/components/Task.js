import React, { useState } from 'react';

const Task = ({ task, updateTask, toggleTaskCompletion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleUpdate = () => {
    const newTitle = prompt('Enter new title', task.title);
    const newDescription = prompt('Enter new description', task.description);
    if (newTitle && newDescription) {
      updateTask({ ...task, title: newTitle, description: newDescription, timestamp: new Date().toISOString() });
    }
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <span>{task.title}</span>
        <button onClick={handleCompletion}>{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleToggle}>{isExpanded ? 'Collapse' : 'Expand'}</button>
      </div>
      {isExpanded && (
        <div className="task-details">
          <p>{task.description}</p>
          <p>Last updated: {new Date(task.timestamp).toLocaleString()}</p>
          <button onClick={handleUpdate}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
