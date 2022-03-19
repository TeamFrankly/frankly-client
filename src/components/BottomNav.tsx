import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import HomeIcon from "../assets/icons/Nav/Home.svg";
import ChatIcon from "../assets/icons/Nav/Chat.svg";
import NtnlAsmblIcon from "../assets/icons/Nav/NtnlAsmbl.svg";
import UserIcon from "../assets/icons/Nav/User.svg";
import HomeActiveIcon from "../assets/icons/Nav/Home_active.svg";
import ChatActiveIcon from "../assets/icons/Nav/Chat_active.svg";
import NtnlAsmblActiveIcon from "../assets/icons/Nav/NtnlAsmbl_active.svg";
import UserActiveIcon from "../assets/icons/Nav/User_active.svg";

function BottomNav() {
  let activeClassName = "active";

  return (
    <Nav>
      <NavArea>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? HomeActiveIcon : HomeIcon} alt="홈페이지로 이동" />
              <p>홈</p>
            </>
          )}
        </NavLink>

        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? ChatActiveIcon : ChatIcon} alt="커뮤니티 페이지로 이동" />
              <p>커뮤니티</p>
            </>
          )}
        </NavLink>

        <NavLink
          to="/lawmaker"
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? NtnlAsmblActiveIcon : NtnlAsmblIcon} alt="국회의원 페이지로 이동" />
              <p>국회의원</p>
            </>
          )}
        </NavLink>

        <NavLink
          to="/user/231"
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? UserActiveIcon : UserIcon} alt="내정보 페이지로 이동" />
              <p>내 정보</p>
            </>
          )}
        </NavLink>
      </NavArea>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  .active p {
    font-weight: bold;
    color: black;
  }
`;

const NavArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  a {
    width: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  span {
    color: #B5B5B5;
  }
  p {
    margin-top: 2px;
    font-size: 1rem;
    color: #B5B5B5;
  }
`;

export default BottomNav;