import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export interface LawmakerEntity {
  id: number;
  name: string;
  img: string;
}

export interface LawmakerListProps {
  list: LawmakerEntity[];
}

const LawmakerList: React.FunctionComponent<LawmakerListProps> = ({list}) => {

  return (
    <LawmakerGrid>
      {list?.map(item => (
        <li key={item.id}>
          <Link to={"/lawmaker/" + item.id}>
            <div className="lawmaker-list__image">
              <img src={item.img} alt="사진" />
            </div>
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </LawmakerGrid>
  );
}

const LawmakerGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  a {
    margin: 8px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2B2B2B;
    p {
      font-weight: 500;
      font-size: 1.6rem;
    }
    .lawmaker-list__image {
      margin-bottom: 4px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      overflow: hidden;
      > img {
        width: 64px;
      }
    }
  }
  @media screen and (max-width: 430px) { grid-template-columns: repeat(4, 1fr); }
  @media screen and (max-width: 348px) { grid-template-columns: repeat(3, 1fr); }
`;

export default LawmakerList;