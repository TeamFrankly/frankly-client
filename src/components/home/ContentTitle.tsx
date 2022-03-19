import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

interface ContentTitleProps {
  title: string;
  iconName: string | undefined | null;
  moreViewLink: string | undefined | null;
}

const ContentTitle: React.FC<ContentTitleProps> = ({title, iconName,moreViewLink}) => {
  return (
    <Main>
      <div>
        {iconName && <img src={iconName} alt={title} />}
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
  h3 {
    font-size: 1.8rem;
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