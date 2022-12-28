import React, { useState, useEffect } from 'react';

import './style.css';

export default function App() {
  const [posts, setPosts] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error('Oh no');
        }
        return res.json();
      })
      .then((data) => setPosts(data));
  });

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-block">
          {post.title}
        </div>
      ))}
    </div>
  );
}
