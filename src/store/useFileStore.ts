import { create } from 'zustand';

export interface File {
  name: string;
  type: 'file' | 'folder';
  createdAt: string;
}

interface FileState {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const useFileStore = create<FileState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));
