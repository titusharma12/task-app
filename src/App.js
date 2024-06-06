import React, { useState, useEffect } from 'react';
import LoginPage from './Component/LoginPage';
import DataTable from './Component/DataTable';
import './App.css';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const handleLogin = async (email, password) => {
    if (email && password) {
      setisLoggedIn(true);
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    } else {
      alert('Invalid email and password');
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DataTable posts={currentPosts} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
      )}
    </div>
  );
}

export default App;
