import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PostPage() {
  const [state, setState] = useState<string>("");
  let { boardName, postId } = useParams();

  useEffect(() => {
    console.log("PostPage");
  }, [])

  return (
    <>
      <Main>
        [{boardName}] 게시판의 글 번호 : [{postId}]번 글
      </Main>
    </>
  );
}


export default PostPage;