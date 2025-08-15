import React, { useEffect } from 'react';
import FileList from '../components/FileList';
import FileToolbar from '../components/FileToolbar';
import BreadcrumbNav from '../components/BreadcrumbNav';
import SearchBar from '../components/SearchBar';
import { useFileStore } from '../store/useFileStore';

export default function HomePage() {
  const { files, setFiles } = useFileStore();

  useEffect(() => {
    // 模拟接口数据
    setFiles([
      { name: '文档1.txt', type: 'file', createdAt: '2025-08-15' },
      { name: '图片', type: 'folder', createdAt: '2025-08-14' },
      { name: 'PPT.pptx', type: 'file', createdAt: '2025-08-13' },
    ]);
  }, [setFiles]);

  const handleOpen = (name: string) => {
    alert(`打开文件/文件夹: ${name}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <FileToolbar />
      <BreadcrumbNav />
      <SearchBar />
      <FileList files={files} onOpen={handleOpen} />
    </div>
  );
}
