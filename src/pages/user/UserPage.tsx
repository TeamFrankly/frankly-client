import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {HeaderProfile} from "../../components/Header";

const UserPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");
  let { userId } = useParams();

  useEffect(() => {
    console.log("UserPage");
  }, [])

  return (
    <div className="wrap">
      <HeaderProfile />
      {userId} 유저 정보 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default UserPage;