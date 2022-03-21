import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import BottomNav from "./components/BottomNav";
import CommunityPage from "./pages/community/CommunityPage";
import LawmakerHomePage from "./pages/lawmaker/LawmakerHomePage";
import UserPage from "./pages/user/UserPage";
import WritePage from "./pages/community/WritePage";
import PostPage from "./pages/community/PostPage";
import BoardPage from "./pages/community/BoardPage";
import SearchPage from "./pages/lawmaker/SearchPage";
import LawmakerProfilePage from "./pages/lawmaker/LawmakerProfilePage";
import NoticePage from "./pages/community/NoticePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/notice" element={<NoticePage />} />
        <Route path="/community/:boardName" element={<BoardPage />} />
        <Route path="/community/:boardName/:postId" element={<PostPage />} />
        <Route path="/community/:boardName/write" element={<WritePage />} />
        <Route path="/lawmaker" element={<LawmakerHomePage />} />
        <Route path="/lawmaker/:lawmakerId" element={<LawmakerProfilePage />} />
        <Route path="/lawmaker/search" element={<SearchPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;