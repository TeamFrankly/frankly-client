import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const SignUp: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("SignUp");
  }, [])

  return (
    <div>
      회원가입 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default SignUp;