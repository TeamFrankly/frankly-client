import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const Main = styled.div`

`;

const UserPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");
  let { userId } = useParams();

  useEffect(() => {
    console.log("UserPage");
  }, [])

  return (
    <div className="wrap">
      {userId} 유저 정보 페이지
    </div>
  );
}


export default UserPage;