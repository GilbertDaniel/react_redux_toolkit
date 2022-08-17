
import { AddPostForm } from './features/post/AddPostForm';
import PostsList from './features/post/PostsList';
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import SinglePostPage from './features/post/SinglePostPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
