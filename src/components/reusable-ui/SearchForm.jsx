import styled from "styled-components";
import { IoSearchCircle } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function SearchForm({ className, placeholder, onSearch }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (onSearch) {
      onSearch(inputValue);
    }
  }, [inputValue, onSearch]);

  return (
    <SearchFormStyled
      className={className}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="input-search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="submit-button">
        <IoSearchCircle />
      </button>
    </SearchFormStyled>
  );
}

const SearchFormStyled = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .input-search {
    width: 250px;
    height: 42px;
    font-size: 18px;
    text-align: center;
    border-radius: 30px;
    border: 3px solid #b659b6;
    outline: none;
    &::placeholder {
      font-size: 15px;
      text-align: left;
      padding-left: 20px;
    }
    &:focus {
      box-shadow: 0px 0px 4px 0px rgba(182, 89, 182, 0.75);
    }
  }
  .submit-button {
    background-color: transparent;
    border: none;
    position: absolute;
    color: #b659b6;
    font-size: 45px;
    top: -1.5px;
    right: -1.5px;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    .input-search {
      width: 200px;
      height: 35px;
      border-width: 2.5px;
      &::placeholder {
        font-size: 13px;
      }
    }
    .submit-button {
      display: none;
    }
  }
  @media screen and (max-width: 650px) {
    .input-search {
      display: none;
    }
  }
`;
