import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LawmakerListPage() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("LawmakerListPage");
  }, [])

  return (
    <>
      <Main>
        여기는 국회의원 메인
      </Main>
    </>
  );
}


export default LawmakerListPage;