import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import tasksData from './data/tasks.json';
import './App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const query = useQuery();

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  useEffect(() => {
    setSearchQuery(query.get('search') || '');
  }, [query]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, timestamp: new Date().toISOString() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    navigate(`?search=${value}`);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <input type="text" placeholder="Search tasks..." value={searchQuery} onChange={handleSearch} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
