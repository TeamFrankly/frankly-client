import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {HeaderBack} from "../../components/Header";
import PostList from "../../components/community/PostList";
import EditAltIcon from "../../assets/icons/Edit_alt.svg";

const BoardPage: React.FunctionComponent = () => {
  let { boardName } = useParams();

  useEffect(() => {
    console.log(boardName + "BoardPage");
    // 백엔드에서 불러오기 -> 없는 게시판이면 ?
  }, [])

  return (
    <div className="wrap">
      <HeaderBack
        title={boardName?.replace(/-/g, ' ')}
        backTo=""
      />
      <PostList />
      <WriteButton to="write">
        <img src={EditAltIcon} alt="글쓰기 버튼" />
      </WriteButton>
    </div>
  );
}

const Main = styled.div`

`;

const WriteButton = styled(Link)`
  position: fixed;
  right: 16px;
  bottom: 80px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
  img {
    width: 2.4rem;
  }
`;

export default BoardPage;