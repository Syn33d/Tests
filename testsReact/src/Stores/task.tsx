import {create} from 'zustand';

interface Task {
  title: string;
  note: string;
  comment: string;
  date: string;
  index: number;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (index) => set((state) => ({ tasks: state.tasks.filter((task) => task.index !== index) })),
}));