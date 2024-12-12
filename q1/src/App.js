import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchId) {
      setFilteredPosts(posts.filter(post => post.id.toString() === searchId));
    } else {
      setFilteredPosts(posts);
    }
  }, [searchId, posts]);

  const handleInputChange = (id, field, value) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return { ...post, [field]: value };
      }
      return post;
    });
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  return (
    <div className="app">
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search by ID"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
        className="search-input"
      />
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <input
                  type="text"
                  value={post.title}
                  onChange={e => handleInputChange(post.id, 'title', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={post.body}
                  onChange={e => handleInputChange(post.id, 'body', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
