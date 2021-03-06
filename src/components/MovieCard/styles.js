import styled from 'styled-components'

export const Legend = styled.figcaption`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  overflow: hidden;
  padding: 1.6rem;
  position: absolute;
  top: 100%;
  transition: all 0.3s ease;
  width: 100%;

  p {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }
`

export const Card = styled.figure`
  background-color: var(--background);
  height: 30rem;
  overflow: hidden;
  position: relative;
  width: 18.8rem;

  &:hover ${Legend} {
    top: 0;
  }

  img {
    object-fit: cover;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
