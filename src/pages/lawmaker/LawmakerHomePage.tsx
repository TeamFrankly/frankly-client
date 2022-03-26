import React, {useEffect} from 'react';
import styled from "styled-components";
import ContentTitle from '../../components/home/ContentTitle';
import SearchInput from '../../components/SearchInput';
import PartyList from "../../components/lawmaker/PartyList";
import LawmakerTitle from "../../components/lawmaker/LawmakerTitle";
import LawmakerList from "../../components/lawmaker/LawmakerList";

const LawmakerHomePage: React.FunctionComponent = () => {
  const list = [
    {
      id: 2,
      name: "이진석",
      img: "../"
    },
    {
      id: 3,
      name: "정진석",
      img: "../"
    },
    {
      id: 4,
      name: "홍준표",
      img: "../"
    }
  ]
  useEffect(() => {
    fetch("http://teamfrankly.kr/api/infos/all")
      .then(res => res.json())
      .then(data => console.log(JSON.stringify(data)));
    console.log("LawmakerHomePage");
  }, [])

  return (
    <Main className="wrap">
      <SearchInput />
      <ContentTitle
        iconName=""
        title="대한민국 정당"
        moreViewLink=""
      />
      <PartyList />
      <LawmakerTitle
        title="경기도 국회의원"
      />
      <LawmakerList
        list={list}
      />
    </Main>
  );
}

const Main = styled.div`
  margin: 0 auto;
`;

export default LawmakerHomePage;