import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterInfo from "./CharacterInfo/CharachterInfo";
import { Pagination } from "../shared/components/molecules";
import { Character } from "../shared/models/character";
import { CharacterSearch } from "./CharacterSearch/CharacterSearch";
import { CharacterSort } from "./CharacterSort/CharacterSort";
import {
  getCharacters,
  setCharactersPage,
  sortCharacters,
  setCharactersSearchTerm,
} from "../shared/store/characters/actions";
import {
  selectCharacters,
  selectCurrentPage,
  selectTotalPages,
  selectSearchTerm,
} from "../shared/selectors";
import { SortParam, SortDirection } from "../shared/constants";
import "./characters.scss";

const Characters = () => {
  let totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const page = useSelector(selectCurrentPage);
  const searchTerm = useSelector(selectSearchTerm);
  // const [error, setError] = useState<string>("");
  const sortOptions = [SortParam.Name, SortParam.Gender, SortParam.Species];

  useEffect(() => {
    let params: any = { page };
    if (searchTerm) {
      params.name = searchTerm;
    }
    dispatch(getCharacters(params));
  }, [page, searchTerm]);

  // useEffect(() => {
  //   if (error) {
  //     totalPages.current = 0;
  //     setCharacters([]);
  //   }
  // }, [error]);

  const getCharacterListItems = () => {
    if (!characters) {
      return null;
    } else {
      return characters.map((character: Character) => (
        <div className="list__item" key={character.id}>
          <CharacterInfo data={character}></CharacterInfo>
        </div>
      ));
    }
  };

  const handlePageChange = (page: number) => {
    dispatch(setCharactersPage(page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchInput = (text: string) => {
    dispatch(setCharactersSearchTerm(text));
  };

  const handleSetSortOptions = (param: SortParam, direction: SortDirection) => {
    dispatch(sortCharacters(direction, param));
  };

  return (
    <>
      <header className="characterHeader">
        <div className="characterHeader__search">
          <CharacterSearch onSearch={handleSearchInput}></CharacterSearch>
        </div>
        <div className="characterHeader__sort">
          <CharacterSort
            sortOptions={sortOptions}
            onSelect={handleSetSortOptions}
          ></CharacterSort>
        </div>
      </header>
      <section className="list">
        {false ? <h2>No Result Found</h2> : getCharacterListItems()}
      </section>
      <footer>
        <Pagination
          totalPages={totalPages}
          activePage={page}
          pageClicked={handlePageChange}
        ></Pagination>
      </footer>
    </>
  );
};

export default Characters;
