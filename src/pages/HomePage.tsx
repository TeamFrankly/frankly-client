import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {HeaderLogo} from "../components/Header";
import {Link} from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchRedIcon from "../assets/icons/Search_red.svg";
import ContentTitle from "../components/home/ContentTitle";

const HomePage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("HomePage");
  }, [])

  return (
    <div className="wrap">
      <HeaderLogo />
      <Slider />
      <SearchInput />
      <Container>
        <ContentTitle
          iconName={SearchRedIcon}
          title="인기 검색 국회의원 TOP 4"
          moreViewLink=""
        />
        <LawmakerGrid>
          <li>
            <div className="lawmaker-list__image">
              <img src="" alt="사진" />
            </div>
            <p>정진석</p>
          </li>
        </LawmakerGrid>
        <ContentTitle
          iconName={SearchRedIcon}
          title="오늘 국회 일정"
          moreViewLink="test"
        />
      </Container>
    </div>
  );
}

const Slider = styled.div`
  width: 100%;
  height: 180px;
  background-color: #A9A9A9;
`;

const Container = styled.div`
  padding: 0 0 24px;
  width: 100%;
`;

const LawmakerGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  li {
    margin: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2B2B2B;
    p {
      font-weight: 500;
      font-size: 1.6rem;
    }
    .lawmaker-list__image {
      margin-bottom: 4px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      overflow: hidden;
      > img {
        width: 64px;
      }
    }
  }
  @media screen and (max-width: 430px) { grid-template-columns: repeat(4, 1fr); }
  @media screen and (max-width: 348px) { grid-template-columns: repeat(3, 1fr); }
`;

export default HomePage;