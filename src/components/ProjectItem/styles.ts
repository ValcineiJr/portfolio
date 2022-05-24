import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  gap: 20px;

  margin-bottom: 40px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 20px;

  h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.header_text};
    font-weight: bold;
  }

  span,
  p,
  a {
    font-size: 1.8rem;
  }

  span,
  p {
    color: ${({ theme }) => theme.colors.header_text};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  .tech {
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 2px;
  }

  &:hover {
    figure::before {
      -webkit-animation: shine 1s;
      animation: shine 1s;
    }
  }

  .image {
    width: 100%;
    height: 300px;
    padding-top: 56.25%; /* 16:9 */

    overflow: hidden;

    position: relative;
    top: 0;
    left: 0;

    figure::before {
      position: absolute;
      top: 0;
      left: -75%;
      z-index: 2;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
    }

    @-webkit-keyframes shine {
      100% {
        left: 125%;
      }
    }
    @keyframes shine {
      100% {
        left: 125%;
      }
    }
  }

  .image img {
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
