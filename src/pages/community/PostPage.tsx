import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {HeaderPost} from "../../components/Header";

const Main = styled.div`

`;

const PostPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");
  let { boardName, postId } = useParams();

  useEffect(() => {
    console.log("PostPage");
  }, [])

  return (
    <div className="wrap">
      <HeaderPost />
      [{boardName}] 게시판의 글 번호 : [{postId}]번 글
    </div>
  );
}


export default PostPage;