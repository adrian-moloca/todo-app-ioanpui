'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import { ITask } from './index.interfaces';
import { defaultTask } from './data.mock';

interface TasksContextType {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  toggleTaskCompletion: (taskId: number) => void;
  getTasksByProgress: (progress: boolean) => ITask[];
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>(defaultTask);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };


  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, progress: !task.progress } : task
    );
    setTasks(updatedTasks);
  };

  const getTasksByProgress = (completed: boolean) => {
    return tasks.filter((task) => task.progress === completed);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompletion,
        getTasksByProgress
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}
