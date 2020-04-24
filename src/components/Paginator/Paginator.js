import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classes from './Paginator.module.scss';

const PAGE_OFFSET = 3;
const PAGE_RANGE = 7;

const paginator = (props) => {
  const nextPage = () => {
    props.updatePage(props.currentPage + 1);
  }

  const previousPage = () => {
    props.updatePage(props.currentPage - 1);
  }

  const showPaginatorButton = (limitPage) => {
    return props.currentPage !== limitPage;
  }

  const getNextPageButton = () => {
    const buttonClasses = [classes.PaginatorItem, classes.PaginatorButton];
    return <button className={buttonClasses.join(' ')} onClick={nextPage}>
        Next
        <FontAwesomeIcon icon={faChevronRight} className={classes.Icon} />
      </button>;
  }

  const getPreviousPageButton = () => {
    const buttonClasses = [classes.PaginatorItem, classes.PaginatorButton];
    return <button className={buttonClasses.join(' ')} onClick={previousPage}>
        <FontAwesomeIcon icon={faChevronLeft} className={classes.Icon} />
        Previous
      </button>;
  }

  const getPages = () => {
    let start = Math.max(0, props.currentPage - PAGE_OFFSET);
    let end = Math.min(props.totalPages, props.currentPage + PAGE_OFFSET + 1);

    if (start === 0 && end < props.totalPages) {
      const remainingGreaterPages = PAGE_RANGE - props.currentPage - start;
      end = Math.min(props.totalPages, props.currentPage + remainingGreaterPages);
    } else if (end === props.totalPages && start > 0) {
      const remainingMinorPages = PAGE_RANGE - (end - props.currentPage);
      start = Math.max(0, props.currentPage - remainingMinorPages);
    }
    
    const pages = [];
    let pageClasses = [];
    for (let page = start; page < end; page++) {
      pageClasses = [classes.PaginatorItem, classes.Page];

      if (page === props.currentPage) {
        pageClasses.push(classes.Active);
      }

      pages.push(
        <li key={page}
          className={pageClasses.join(' ')}
          onClick={() => props.updatePage(page)}>{page + 1}</li>
      )
    }

    return <ul className={classes.PageList}>{pages}</ul>
  }

  return (
    <div className={classes.Paginator}>
      {showPaginatorButton(0) ? getPreviousPageButton() : null}
      {getPages()}
      {showPaginatorButton(props.totalPages - 1) ? getNextPageButton() : null}
    </div>
  )
}

export default paginator;
