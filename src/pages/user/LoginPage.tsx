import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const LoginPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("LoginPage");
  }, [])

  return (
    <div>
      로그인 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default LoginPage;