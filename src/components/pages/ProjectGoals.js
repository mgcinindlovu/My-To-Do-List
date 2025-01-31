import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ProjectGoals() {
  const [date, setDate] = useState(new Date());
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, date }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-planner">
      <h2>Set Goals</h2>
      <Calendar
        onChange={setDate}
        value={date}
        view="month"
        showNeighboringMonth={false}
      />
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Set Goals</button>
      
      <ul>
        <li>Complete to-do-list project </li>
        <li>React basics</li>
        <li>Finish scrimba project</li>
      </ul>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - {task.date.toDateString()}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectGoals;