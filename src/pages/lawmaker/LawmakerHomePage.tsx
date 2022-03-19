import React, {useEffect} from 'react';
import styled from "styled-components";
import ContentTitle from '../../components/home/ContentTitle';
import SearchInput from '../../components/SearchInput';
import PartyList from "../../components/lawmaker/PartyList";
import LawmakerTitle from "../../components/lawmaker/LawmakerTitle";
import LawmakerList from "../../components/lawmaker/LawmakerList";

const LawmakerHomePage: React.FunctionComponent = () => {

  useEffect(() => {
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
      <LawmakerList />
    </Main>
  );
}

const Main = styled.div`
  margin: 0 auto;
`;

export default LawmakerHomePage;