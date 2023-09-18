'use client';
import React, { FC } from 'react';
import styles from './index.module.css';
import { useTasks } from '@/app/context/TaskContent';
import TaskCard from '../task-ard/TaskCard';
import { ITask } from '@/app/context/index.interfaces';

const PageContainer: FC = () => {
	const {getTasksByProgress, toggleTaskCompletion } = useTasks();
	const toDoTaks: ITask[] = getTasksByProgress(false);
	const progressTaks: ITask[] = getTasksByProgress(true);

	return (
		<div className={styles.contentContainer}>
			<div className={styles.listContiner}>
				<p className=' py-1 font-medium text-lg'>To do</p>
				{toDoTaks.map(task =><TaskCard key={task.id} task={task} 
					toggleTaskCompletion={()=> toggleTaskCompletion(task.id)} />)}
			</div>
			<div className={styles.listContiner}>
				<p className=' py-1 font-medium text-lg'>In progress</p>
				{progressTaks.map(task =><TaskCard key={task.id} task={task} 
					toggleTaskCompletion={()=> toggleTaskCompletion(task.id)} />)}
			</div>
		</div>
	)
}

export default PageContainer