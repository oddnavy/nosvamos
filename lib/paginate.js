import { drop } from "lodash";

export function paginate(items, page = 1, perPage = 10) {
  const offset = (page - 1) * perPage;
  const pagedItems = drop(items, offset).slice(0, perPage);
  const totalPages = Math.ceil(items.length / perPage);
  const prevPage = page - 1;
  const nextPage = page + 1;
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return {
    page,
    perPage,
    total: items.length,
    isFirstPage,
    isLastPage,
    prevPage: isFirstPage ? null : prevPage,
    nextPage: isLastPage ? null : nextPage,
    totalPages,
    items: pagedItems,
  };
}
