'use client';
import { useTasks } from '@/app/context/TaskContent';
import { ITask } from '@/app/context/index.interfaces';
import React, { useState } from 'react';

const TaskForm: React.FC = () => {
    const { addTask } = useTasks();

    const generateUniqueId = (): number =>{
        const timestamp = Date.now();
        return timestamp;
      }
      
    const [newTask, setNewTask] = useState<ITask>({
        id: generateUniqueId(),
        persAsign: '',
        estimated: new Date(),
        description: '',
        progress: false,
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = event.target;
    
        if (name === 'estimated') {
          setNewTask((prevTask) => ({
            ...prevTask,
            [name]: new Date(value),
          }));
        } else {
          setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
          }));
        }
      };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addTask(newTask);
        setNewTask({
            id: generateUniqueId(),
            persAsign: '',
            estimated: new Date(),
            description: '',
            progress: false,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Assignee:
                <input
                    type="text"
                    name="persAsign"
                    value={newTask.persAsign}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Estimated:
                <input
                    type="date"
                    name="estimated"
                    value={newTask.estimated.toISOString().split('T')[0]}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Description:
                <input
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
