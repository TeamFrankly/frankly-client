import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.div`
`;

const CommunityPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("CommunityPage");
  }, [])

  return (
    <div className="wrap">
      <p>여기는 커뮤니티 메인</p>
      <Link to="/community/board/자유-게시글">자유 게시글</Link>
    </div>
  );
}

export default CommunityPage;