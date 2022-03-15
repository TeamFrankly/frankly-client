import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import BottomNav from "./components/BottomNav";
import CommunityPage from "./pages/community/CommunityPage";
import LawmakerListPage from "./pages/lawmaker/LawmakerListPage";
import UserPage from "./pages/UserPage";
import WritePage from "./pages/community/WritePage";
import PostPage from "./pages/community/PostPage";
import BoardPage from "./pages/community/BoardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/board/:boardName" element={<BoardPage />} />
        <Route path="/community/board/:boardName/:postId" element={<PostPage />} />
        <Route path="/community/write" element={<WritePage />} />
        <Route path="/lawmaker" element={<LawmakerListPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;