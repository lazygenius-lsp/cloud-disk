import React from 'react';
import FileItem from './FileItem';
import { File } from '../store/useFileStore';

interface FileListProps {
  files: File[];
  onOpen: (name: string) => void;
}

export default function FileList({ files, onOpen }: FileListProps) {
  return (
    <div>
      {files.map((file) => (
        <FileItem key={file.name} file={file} onOpen={onOpen} />
      ))}
    </div>
  );
}
