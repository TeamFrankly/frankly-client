import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import party1 from "../../assets/images/party/1.svg";
import party2 from "../../assets/images/party/2.svg";
import party3 from "../../assets/images/party/3.svg";
import party4 from "../../assets/images/party/4.svg";
import party5 from "../../assets/images/party/5.svg";
import party6 from "../../assets/images/party/6.svg";

interface PartyListProps {

}

const PartyList: React.FunctionComponent<PartyListProps> = (props) => {
  let partys = [
    {
      party: "더불어민주당",
      logo: party1,
    },
    {
      party: "국민의힘",
      logo: party2,
    },
    {
      party: "정의당",
      logo: party3,
    },
    {
      party: "국민의당",
      logo: party4,
    },
    {
      party: "열린민주당",
      logo: party5,
    },
    {
      party: "기본소득당",
      logo: party6,
    }
  ]

  return (
    <PartyListStyle id="partyList">
      {partys.map(item => (
        <li key={item.party}>
          <Link to="" className="party-list__box">
            <img src={item.logo} alt={item.party} />
          </Link>
        </li>
      ))}
    </PartyListStyle>
  );
}

const PartyListStyle = styled.ul`
  padding: 8px 0 48px 0;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: grab;
  overflow: auto;
  li {
    padding-right: 16px;
    &:first-child{
      margin-left: 16px;
      padding-right: 16px;
    }
  }
  .party-list__box {
    width: 144px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    }
    img {
      max-width: 110px;
      max-height: 46px;
    }
  }
`;

export default PartyList;