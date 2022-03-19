import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Login: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("Login");
  }, [])

  return (
    <div>
      로그인 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default Login;