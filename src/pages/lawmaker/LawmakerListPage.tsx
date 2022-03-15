import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Main = styled.div`

`;

const LawmakerListPage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("LawmakerListPage");
  }, [])

  return (
    <div className="wrap">
      여기는 국회의원 메인
    </div>
  );
}


export default LawmakerListPage;