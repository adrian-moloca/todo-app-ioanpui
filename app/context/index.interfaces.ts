interface ITask {
    id: number;
    persAsign: string;
    estimated: Date;
    description: string;
    progress: boolean;
}

export type { ITask };