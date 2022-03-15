import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardPage: React.FunctionComponent = () => {
  let { boardName } = useParams();

  useEffect(() => {
    console.log("BoardPage");
  }, [])

  return (
    <div className="wrap">
      여기는 [{boardName?.replace(/-/g, ' ')}]게시판 페이지
      <Link to="22">글 22번</Link>
    </div>
  );
}


export default BoardPage;