import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import BullhornIcon from "../assets/icons/Bullhorn.svg";

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

export const HeaderCommunity: React.FunctionComponent = () => {
  return (
    <HeaderCommunityStyle>
      <h2>커뮤니티</h2>
      <Link to="" className="icon-button-56">
        <img src={BullhornIcon} alt="공지사항"/>
      </Link>
    </HeaderCommunityStyle>
  );
}