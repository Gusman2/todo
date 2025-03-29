'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const task: Task = {
      id: uuidv4(),
      title: newTask,
      completed: false
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Todo App</h1>
        
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <button 
              onClick={addTask}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {tasks.length === 0 ? (
            <p className="text-center p-6 text-gray-500">No tasks yet. Add one above!</p>
          ) : (
            <ul>
              {tasks.map(task => (
                <li key={task.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleComplete(task.id)}
                        className="w-4 h-4 mr-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {task.title}
                      </span>
                    </div>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
} 