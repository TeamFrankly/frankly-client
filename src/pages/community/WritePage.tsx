import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Main = styled.div`
`;

const WritePage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("WritePage");
  }, [])

  return (
    <div className="wrap">
      글쓰기 페이지
    </div>
  );
}


export default WritePage;