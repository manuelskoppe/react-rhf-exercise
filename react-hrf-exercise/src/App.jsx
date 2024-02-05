import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PostsList from './pages/PostsList.jsx';
import CreatePost from './pages/CreatePost.jsx';
import PostDetail from './pages/PostDetail.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
