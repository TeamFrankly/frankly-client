import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

interface ContentTitleProps {
  iconName: string;
  title: string;
  moreViewLink: string | undefined | null;
}

const ContentTitle: React.FC<ContentTitleProps> = ({iconName, title, moreViewLink}) => {
  console.log(moreViewLink);
  return (
    <Main>
      <div>
        <img src={iconName} alt={title} />
        <h3>{title}</h3>
      </div>
      {moreViewLink && <DetailLink to={moreViewLink}>더보기</DetailLink>}
    </Main>
  );
}

const Main = styled.div`
  margin: 0 0 8px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.8rem;
    color: #2B2B2B;
  }
  h3 {
    font-size: 1.6rem;
    color: #2B2B2B;
  }
  > div {
    display: flex;
    align-items: center;
  }
`;

const DetailLink = styled(Link)`
  font-size: 1.2rem;
  color: #818181;
  &:hover {
    color: #545454;
  }
`;

export default React.memo(ContentTitle);