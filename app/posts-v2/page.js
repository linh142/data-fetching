'use client'; // Chỉ định component là client-side

import { useEffect, useState } from 'react';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://api.example.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
