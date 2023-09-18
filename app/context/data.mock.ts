import { ITask } from "./index.interfaces";

export const defaultTask: ITask[] = [
    {
    id: 1,
    persAsign: 'John Doe',
    estimated: new Date('2023-12-31'),
    description: 'Task 1 Description',
    progress: false,
  },
  {
    id: 2,
    persAsign: 'Jane Smith',
    estimated: new Date('2023-11-15'),
    description: 'Task 2 Description',
    progress: true,
  },
]