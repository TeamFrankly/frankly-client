import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import BullhornIcon from "../assets/icons/Bullhorn.svg";
import ArrowLeftIcon from "../assets/icons/Arrow_left48.svg";
import NotificationIcon from "../assets/icons/Notification.svg";

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
  > a {
    position: absolute;
    right: 0;
  }
`;

const HeaderBackStyle = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    font-size: 1.8rem;
  }
  > button {
    position: absolute;
    left: 0;
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
      <Link to="" className="icon-button-56">
        <img src={NotificationIcon} alt="알림"/>
      </Link>
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

interface BackHeaderProps {
  title: string | undefined |null;
}

export const HeaderBack: React.FunctionComponent<BackHeaderProps> = ({title}) => {
  let navigate = useNavigate();
  return (
    <HeaderBackStyle>
      <button onClick={() => navigate(-1)} className="icon-button-56">
        <img src={ArrowLeftIcon} alt="뒤로가기"/>
      </button>
      <h2>{title}</h2>
    </HeaderBackStyle>
  );
}
