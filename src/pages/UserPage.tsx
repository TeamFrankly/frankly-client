import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function UserPage() {
  const [state, setState] = useState<string>("");
  let { userId } = useParams();

  useEffect(() => {
    console.log("UserPage");
  }, [])

  return (
    <>
      <Main>
        {userId} 유저 정보 페이지
      </Main>
    </>
  );
}


export default UserPage;