import { FC} from 'react';
import { TasksProvider } from './context/TaskContent';
import styles from './page.module.css';
import PageContainer from './components/page-container';
import TaskForm from './components/task-form/TaskForm';

const Home: FC = () => {

	return (
		<main className={styles.center}>
			<TasksProvider>
				<h1 className={styles.appTitle}>To do App</h1>
				<TaskForm />
				<PageContainer />
			</TasksProvider>
		</main>
	);
};

export default Home;