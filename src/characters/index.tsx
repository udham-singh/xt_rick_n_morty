import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../shared/components/molecules";
import { CharactersList } from "./CharactersList/CharactersList";
import { CharacterFilters } from "./CharacterFilters/CharacterFilters";
import {
  getCharacters,
  setCharactersPage,
} from "../shared/store/characters/actions";
import {
  selectCurrentPage,
  selectTotalPages,
  selectSearchTerm,
} from "../shared/selectors";
import "./characters.scss";
import { CharacterHeader } from "./CharacterHeader/CharacterHeader";

const Characters = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectCurrentPage);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    let params: any = { page };
    if (searchTerm) {
      params.name = searchTerm;
    }
    dispatch(getCharacters(params));
  }, [page, searchTerm]);

  const handlePageChange = (page: number) => {
    dispatch(setCharactersPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="characterContainer">
        <section className="characterContainer__filters">
          <CharacterFilters />
        </section>
        <section className="characterContainer__body">
          <CharacterHeader />
          <CharactersList />
          <footer>
            <Pagination
              totalPages={totalPages}
              activePage={page}
              pageClicked={handlePageChange}
            ></Pagination>
          </footer>
        </section>
      </section>
    </>
  );
};

export default Characters;
