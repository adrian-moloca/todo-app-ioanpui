'use client';
import React, { FC } from 'react';
import { ITask } from '@/app/context/index.interfaces';

interface TaskCardProps {
	task: ITask;
	toggleTaskCompletion: (taskId: number) => void
}

const TaskCard: FC<TaskCardProps> = ({ task, toggleTaskCompletion }) => {

	const handleToggleClick = () => {
		console.log('toggle')
		toggleTaskCompletion(task.id);
	};

	return (
		<div className='p-24, border-2'>
			<p>Assigned to: {task.persAsign}</p>
			<hr />
			<h3>{task.description}</h3>
			<p>Estimated: {task.estimated.toString()}</p>
			<button onClick={handleToggleClick}>
				Toggle Progress
			</button>
		</div>
	);
};

export default TaskCard;
