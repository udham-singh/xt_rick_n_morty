import React, { memo } from "react";
import "./pagination.scss";
import { Button } from "../../atoms";

type Props = {
  totalPages: number;
  activePage: number;
  pageClicked: any;
};

const INITIAL_PAGES_TO_DISPLAY = 5;

export const Pagination = memo((props: Props) => {
  const { totalPages, activePage, pageClicked } = props;

  const getPageButtons = () => {
    const pagesArr = [];
    const startBtnNumber =
      activePage - INITIAL_PAGES_TO_DISPLAY >= 1
        ? activePage - INITIAL_PAGES_TO_DISPLAY
        : 1;
    const lastBtnNumber =
      activePage + INITIAL_PAGES_TO_DISPLAY <= totalPages
        ? activePage + INITIAL_PAGES_TO_DISPLAY
        : totalPages;
    for (let i = startBtnNumber; i <= lastBtnNumber; i++) {
      pagesArr.push(
        <Button
          key={i}
          onClick={() => pageClicked(i)}
          color={activePage === i ? "blue" : "default"}
          value={i}
        ></Button>
      );
    }
    return pagesArr;
  };

  return (
    <>
      {totalPages > 1 && (
        <div className="paginationContainer">
          {activePage !== 1 && totalPages > INITIAL_PAGES_TO_DISPLAY && (
            <button className="btn" onClick={() => pageClicked(1)}>
              First
            </button>
          )}
          {getPageButtons()}
          {activePage !== totalPages && totalPages > INITIAL_PAGES_TO_DISPLAY && (
            <button className="btn" onClick={() => pageClicked(totalPages)}>
              Last
            </button>
          )}
        </div>
      )}
    </>
  );
});
