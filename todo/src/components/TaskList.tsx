import React from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks in this category</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList; 