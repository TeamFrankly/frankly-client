import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function WritePage() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("WritePage");
  }, [])

  return (
    <>
      <Main>
        글쓰기 페이지
      </Main>
    </>
  );
}


export default WritePage;