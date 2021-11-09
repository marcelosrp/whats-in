import styled from 'styled-components'

export const Search = styled.div`
  position: relative;
  width: 100%;

  svg {
    color: #a1a1a1;
    font-size: 1.6rem;
    left: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const MainContent = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  height: ${({ hasMovies }) => (hasMovies ? 'auto' : 'calc(100vh - 12rem);')};
  justify-content: ${({ hasMovies }) => (hasMovies ? 'flex-start' : 'center')};
  padding: 3rem 0;
  width: 100%;
`
