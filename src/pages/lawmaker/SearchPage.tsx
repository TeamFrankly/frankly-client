import React, {useEffect, useState} from 'react';
import styled from "styled-components";

function SearchPage() {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("SearchPage");
  }, [])

  return (
    <div>
      여기는 검색 페이지
    </div>
  );
}

const Main = styled.div`

`;

export default SearchPage;