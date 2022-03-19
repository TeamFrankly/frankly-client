import React, {useEffect} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import { HeaderBack } from '../../components/Header';

const LawmakerProfilePage: React.FunctionComponent = () => {

  let { lawmakerId } = useParams();

  useEffect(() => {
    console.log("LawmakerProfilePage");
  }, [])

  return (
    <div className="wrap">
      <HeaderBack 
        title="국회의원"
      />
      {lawmakerId}번 국회의원 프로필 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default LawmakerProfilePage;