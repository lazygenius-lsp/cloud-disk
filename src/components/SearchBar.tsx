import React from 'react';

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="搜索文件..."
      style={{ marginBottom: '10px', width: '100%', padding: '5px' }}
    />
  );
}
