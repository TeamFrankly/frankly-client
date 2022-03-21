import React, {useEffect} from 'react';
import styled from "styled-components";
import {HeaderBack} from "../../components/Header";

const NoticePage: React.FunctionComponent = () => {

  useEffect(() => {
    console.log("NoticePage");
  }, [])

  return (
    <div>
      <HeaderBack
        title="공지사항"
        backTo=""
      />
    </div>
  );
}

const Main = styled.div`

`;

export default NoticePage;