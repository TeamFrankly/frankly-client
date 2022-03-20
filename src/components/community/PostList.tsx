import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ImageIcon from "../../assets/icons/Image.svg"
import LikeIcon from "../../assets/icons/Like.svg";

interface PostListProps {

}

const PostList: React.FunctionComponent<PostListProps> = (props) => {
  const postData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]
  return (
    <PostListStyle>
      {postData
      ? postData.map(item => (
          <li key={item.id}>
            <Link to={item.id + ""}>
              <div className="post-list__title">
                <img src={ImageIcon} className="post-list__title--img" alt="이미지 있음" />
                <h3 className="post-list__title--h3">정치 잘 모르는 사람들을 위...<span className="comment-count">[110]</span></h3>
              </div>
              <p>자 내글을 잘봐 이건말이</p>
              <div className="post-list__info">
                <span className="post-list__info--span">1시간 전</span>
                <img src={LikeIcon} alt="좋아요" />
                <span className="post-list__info--span">13</span>
              </div>
            </Link>
          </li>
        ))
        : <div>없음</div>}
    </PostListStyle>
  );
}

const PostListStyle = styled.ul`
  padding-top: 14px; 
  li {
    position: relative;
    padding: 16px 24px 30px;
    border-bottom: 1px solid #E7E7E7;
    transition: all 0.08s ease-in-out;
    &:hover {
      background-color: #f8f8f8;
      cursor: pointer;
    }
  }
  p {
    color: #7B7B7B;
  }
  .post-list__title {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }
  .post-list-one-line {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0;
  }
  /* 게시글 제목 */
  .post-list__title--img {
    margin-right: 8px;
  }
  .post-list__title--h3 {
    font-size: 1.6rem;
  }
  .comment-count {
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #ff3a3a;
  }

  /* 게시글 등록시간, 좋아요 수 */
  .post-list__info {
    position: absolute;
    right: 24px;
    bottom: 8px;
    display: flex;
    align-items: center;
    color: #7B7B7B;
  }
  .post-list__info--span {
    font-size: 1.2rem;
  }
`;

export default PostList;