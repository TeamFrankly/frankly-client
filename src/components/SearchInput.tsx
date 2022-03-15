import React from 'react';
import styled from "styled-components";
import SearchIcon from "../assets/icons/Search.svg";

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 0 0 0 16px;
  .search-form {
    display: flex;
    align-items: center;
  }
  .search-form__input {
    padding: 0 16px;
    width: 100%;
    height: 44px;
    border-radius: 56px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.6rem;
    color: #2B2B2B;
    background-color: #F5F5F5;
    outline: 0;
    border: 0;
  }
  .header-search__input {
    margin-left: 56px;
    padding: 0;
    border-radius: 0;
  }
  .search-lawmaker__input:focus-visible {
    outline: 0;
  }
`;

type props = {}

const SearchInput: React.FunctionComponent = (props: props) => {
  return (
    <Main>
      <form action="" className="search-form">
        <label htmlFor="searchLawmaker" />
        <input type="search" id="searchLawmaker" className="search-form__input" placeholder="국회의원 검색" />
        <button type="submit" className="icon-button-56">
          <img src={SearchIcon} alt="검색" />
        </button>
      </form>
    </Main>
  );
}


export default SearchInput;