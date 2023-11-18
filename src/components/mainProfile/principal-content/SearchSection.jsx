import { useEffect } from "react";
import styled from "styled-components";
import SearchForm from "../../reusable-ui/SearchForm";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../features/profile/museumsSlice";
import AddCardSection from "./AddCardSection";

export default function SearchSection() {
  const { isAddSectionDisplayed } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const handleScroll = () => {
    const addCardSection = document.getElementById("add-card-section");
    if (addCardSection) {
      addCardSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSearchChange = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <SearchSectionStyled>
      <SearchForm
        className="search-form"
        placeholder="Rechercher puis ajouter un nouveau musée"
        onSearch={handleSearchChange}
      />
      {isAddSectionDisplayed && <AddCardSection id="add-card-section" />}
      <Table handleScroll={handleScroll} />
    </SearchSectionStyled>
  );
}
const SearchSectionStyled = styled.div`
  .search-form {
    width: 50%;
    max-width: 600px;
    margin: 50px auto;
  }
`;
