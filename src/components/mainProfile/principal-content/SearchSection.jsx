import styled from "styled-components";
import SearchForm from "../../reusable-ui/SearchForm";
import Table from "./table/Table.jsx";
import AddCardSection from "./addCardSection/AddCardSection.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../../features/profile/museumsSlice";

export default function SearchSection() {
  const { isAddSectionDisplayed } = useSelector(
    (state) => state.displaySettings
  );
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <SearchSectionStyled>
      {isAddSectionDisplayed ? (
        <AddCardSection />
      ) : (
        <>
          <SearchForm
            className="search-form"
            placeholder="Rechercher puis ajouter un nouveau musée"
            onSearch={handleSearch}
          />
          <Table />
        </>
      )}
    </SearchSectionStyled>
  );
}
const SearchSectionStyled = styled.div`
  .search-form {
    width: 70%;
    max-width: 600px;
    margin: 80px auto 50px;
    input {
      width: 80%;
    }
    .submit-button {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .search-form {
      input {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 650px) {
    .search-form {
      input {
        display: block;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .search-form {
      width: 90%;
    }
  }
`;
