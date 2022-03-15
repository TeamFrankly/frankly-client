import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BoardPage() {
  let { boardName } = useParams();

  useEffect(() => {
    console.log("BoardPage");
  }, [])

  return (
    <>
      <Main>
        여기는 [{boardName?.replace(/-/g, ' ')}]게시판 페이지
      </Main>
      <Link to="22">글 22번</Link>
    </>
  );
}


export default BoardPage;