import styled from 'styled-components'

export const Search = styled.form`
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
  height: calc(100vh - 12rem);
  justify-content: center;
  width: 100%;
`
