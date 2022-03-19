import React from 'react';
import styled from "styled-components";

interface LawmakerTitleProps {
  title: string;
}

const LawmakerTitle: React.FunctionComponent<LawmakerTitleProps> = ({title}) => {
  return (
    <Main>
      <div>
        <h3>{title}</h3>
      </div>
    </Main>
  );
}

const Main = styled.div`
  margin: 0 0 8px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.8rem;
    color: #2B2B2B;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

export default LawmakerTitle;