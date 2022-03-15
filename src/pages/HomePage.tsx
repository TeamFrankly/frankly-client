import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {HeaderLogo} from "../components/Header";
import {Link} from "react-router-dom";
import SearchInput from "../components/SearchInput";

const HomePage: React.FunctionComponent = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    console.log("HomePage");
  }, [])

  return (
    <div className="wrap">
      <HeaderLogo />
      <Slider />
      <SearchInput />
    </div>
  );
}

const Slider = styled.div`
  width: 100%;
  height: 180px;
  background-color: #A9A9A9;
`;

export default HomePage;