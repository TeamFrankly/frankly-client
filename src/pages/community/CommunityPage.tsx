import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CommunityPage() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("CommunityPage");
  }, [])

  return (
    <>
      <Main>
        여기는 커뮤니티 메인
      </Main>
      <Link to="/community/board/자유-게시글">자유 게시글</Link>
    </>
  );
}


export default CommunityPage;