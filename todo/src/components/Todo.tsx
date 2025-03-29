import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../types/Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { supabase } from '../supabaseClient';

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real implementation, we would fetch tasks from Supabase here
    // For now, we'll simulate with local data
    setTimeout(() => {
      setTasks([
        {
          id: uuidv4(),
          title: 'Learn React',
          completed: false,
          created_at: new Date().toISOString()
        },
        {
          id: uuidv4(),
          title: 'Build a todo app',
          completed: false,
          created_at: new Date().toISOString()
        },
        {
          id: uuidv4(),
          title: 'Learn TypeScript',
          completed: true,
          created_at: new Date().toISOString()
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      created_at: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  if (loading) {
    return <div className="flex justify-center p-4">Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="space-y-8">
        <TaskList
          title="Active Tasks"
          tasks={activeTasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
        <TaskList
          title="Completed Tasks"
          tasks={completedTasks}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default Todo; 