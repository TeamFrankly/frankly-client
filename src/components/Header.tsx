import React from 'react';
import styled from "styled-components";

const Header = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  max-width: 540px;
  height: 56px;
  z-index: 999;
  background-color: #ffffff;
`;

const HeaderLogoStyle = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    font-size: 1.8rem;
  }
`;

const HeaderBackStyle = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    font-size: 1.8rem;
  }
`;

const HeaderCommunityStyle = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    padding-left: 24px;
    font-size: 2.4rem;
  }
`;

export const HeaderLogo: React.FunctionComponent = () => {
  return (
    <HeaderLogoStyle>
      <h1>Frankly</h1>
    </HeaderLogoStyle>
  );
}
