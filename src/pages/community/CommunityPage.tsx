import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {HeaderCommunity} from "../../components/Header";
import PinIcon from "../../assets/icons/Board/Pin.svg"

const CommunityPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.info("CommunityPage");
  }, [])

  return (
    <div className="wrap">
      <HeaderCommunity />
      <CommunityList>
        <h4>일반 커뮤니티</h4>
        <ul>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              인기게시글
            </Link>
          </li>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              자유게시판
            </Link>
          </li>
        </ul>
      </CommunityList>
      <CommunityList>
        <h4>지역 커뮤니티</h4>
        <ul>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              인기게시글
            </Link>
          </li>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              대구 달서구을
            </Link>
          </li>
        </ul>
      </CommunityList>
      <CommunityList>
        <h4>일반 커뮤니티</h4>
        <ul>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              인기게시글
            </Link>
          </li>
          <li>
            <Link to="" className="board-name">
              <img src={PinIcon} alt="" />
              자유게시판
            </Link>
          </li>
        </ul>
      </CommunityList>
    </div>
  );
}

const CommunityList = styled.div`
  padding: 8px 24px;
  > h4 {
    margin-bottom: 8px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #818181;
  }
  a {
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: #2B2B2B;
    &:hover {
      background-color: #f8f8f8;
    }
    img {
      margin-right: 8px;
    }
  }
`;

export default CommunityPage;