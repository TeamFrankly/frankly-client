import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {HeaderLogo} from "../components/Header";
import {Link} from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SearchRedIcon from "../assets/icons/Search_red.svg";
import BookMarkBlueIcon from "../assets/icons/Bookmark_blue.svg";
import ContentTitle from "../components/home/ContentTitle";
import NationalAssemblySchedule from "../components/home/NationalAssemblySchedule";
import LawmakerList from "../components/lawmaker/LawmakerList";

const HomePage: React.FC = () => {
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
        <LawmakerList

        />
      </Container>
      <Container>
        <ContentTitle
          iconName={BookMarkBlueIcon}
          title="오늘 국회 일정"
          moreViewLink="test/test"
        />
        <NationalAssemblySchedule />
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

export default HomePage;