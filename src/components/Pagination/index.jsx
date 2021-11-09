import { FaChevronLeft } from '@react-icons/all-files/fa/FaChevronLeft'
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight'

import * as S from './styles'

export default function Pagination({
  currentPage,
  totalPages,
  getPrevPage,
  getNextPage,
  setPage,
  GoToFirstPage,
  GoToLastPage
}) {
  let items = []
  let leftSide = currentPage - 2
  if (leftSide <= 0) leftSide = 1
  let rightSide = currentPage + 2
  if (rightSide > totalPages) rightSide = totalPages

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <S.PaginationButton
        key={number}
        {...(number === currentPage && { active: true })}
        onClick={() => setPage(number)}
      >
        {number}
      </S.PaginationButton>
    )
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationButton
        title="First page"
        onClick={GoToFirstPage}
        disabled={currentPage === 1 && true}
      >
        First page
      </S.PaginationButton>

      <S.PaginationButton
        title="Prev page"
        onClick={getPrevPage}
        disabled={currentPage === 1 && true}
        hiddenMobile={true}
      >
        <FaChevronLeft />
      </S.PaginationButton>
      {items}

      <S.PaginationButton
        title="Next page"
        onClick={getNextPage}
        disabled={currentPage === totalPages && true}
        hiddenMobile={true}
      >
        <FaChevronRight />
      </S.PaginationButton>

      <S.PaginationButton
        title="Last page"
        onClick={GoToLastPage}
        disabled={currentPage === totalPages && true}
      >
        Last page
      </S.PaginationButton>
    </S.PaginationWrapper>
  )
}
