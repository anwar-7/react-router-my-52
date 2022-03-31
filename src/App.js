import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
