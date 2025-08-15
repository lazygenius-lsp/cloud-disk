import React from 'react';
import { File } from '../store/useFileStore';

interface FileItemProps {
  file: File;
  onOpen: (name: string) => void;
}

export default function FileItem({ file, onOpen }: FileItemProps) {
  return (
    <div
      className="file-item"
      style={{
        padding: '8px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
      }}
      onClick={() => onOpen(file.name)}
    >
      <strong>{file.name}</strong> ({file.type}) - {file.createdAt}
    </div>
  );
}
