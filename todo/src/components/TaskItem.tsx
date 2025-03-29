import React from 'react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
      </div>
      <button 
        onClick={() => onDeleteTask(task.id)}
        className="p-1 text-red-500 hover:text-red-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem; 