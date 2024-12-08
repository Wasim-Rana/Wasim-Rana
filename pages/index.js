// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    // Fetch the README.md file from the public directory
    fetch('/README.md')
      .then((response) => response.text())
      .then((data) => {
        setReadmeContent(data);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My GitHub README</h1>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
        {readmeContent}
      </pre>
    </div>
  );
}
