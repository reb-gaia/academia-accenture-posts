import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  })

  useEffect(() => {
    api.get("/posts")
    .then(res => setPosts(pState => [...pState, ...res.data]))
  }, []); 

  return (
    <div>
      {posts.map(posts => (
        <div key={posts.id}>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
