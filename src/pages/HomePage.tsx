import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {HeaderLogo} from "../components/Header";

const Main = styled.div`
  margin: 54px auto 0 auto;
  max-width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-grow: 1;
  flex-direction: column;
`;

function HomePage() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("HomePage");
  }, [])

  return (
    <>
      <HeaderLogo />
      <Main>
        여기는 홈
      </Main>
    </>
  );
}

export default HomePage;