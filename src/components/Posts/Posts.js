import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);
  return (
    <div>
      <h3>This is The posts...: {posts.length}</h3>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.id}{' '}
        </Link>
      ))}

      <Outlet />
    </div>
  );
};

export default Posts;
