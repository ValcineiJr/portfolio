import styled, { css } from 'styled-components';

interface ContainerProps {
  scroll: number;
}

export const Container = styled.header<ContainerProps>`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  position: fixed !important;
  top: 0;
  left: 0;

  z-index: 11;

  .brand {
    svg {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;

    height: 100%;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    overflow-y: hidden;

    .overlay {
      display: none;

      overflow: hidden;

      position: fixed;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.5);
    }

    .overlay.toggle {
      display: initial;
      overflow-y: hidden !important;
    }

    button {
      font-family: Karla;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 19px;
      text-align: center;
      letter-spacing: -1px;
      color: ${({ theme }) => theme.colors.primary};
      height: 40px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      box-sizing: border-box;
      border-radius: 3px;
      margin-left: auto;
      background-color: transparent;

      padding: 2rem;

      transition: 0.6s;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
        border-radius: 20px;
      }
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }

    .menu-icon {
      margin-left: 16px;

      color: ${({ theme }) => theme.colors.header_text};

      cursor: pointer;
    }
  }

  .logo {
    margin-right: 40px;
    height: 21px;

    display: flex;
    align-items: center;

    font-size: 2.2rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.header_text};
  }

  nav {
    height: 100%;
  }

  nav > ul {
    display: flex;
    gap: 30px;

    align-items: center;
    height: 100%;
  }

  nav > ul > li > a {
    color: ${({ theme }) => theme.colors.header_text};
    font-size: 1.8rem;
  }

  transition: 0.6s;

  @media (min-width: 991px) {
    .show-mobile {
      display: none;
    }
  }

  ${({ scroll }) =>
    scroll >= 500
      ? css`
          margin-top: 0;
          box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.shadow_color};
        `
      : scroll >= 20
      ? css`
          margin-top: -100px;
        `
      : css`
          margin-top: 0;
        `}

  @media (max-width: 991px) {
    nav {
      position: fixed;
      left: 0;
      top: 0;

      width: 70%;
      height: 100%;

      background-color: #fff;

      transform: translateX(-100%);
      transition: all 0.5s ease;
      z-index: 1099;

      box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);

      .close {
        position: absolute;

        top: 11px;
        right: 10px;
      }

      .logo-mobile {
        margin-right: 40px;
        height: 21px;

        display: flex;
        align-items: center;

        font-size: 2.2rem;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.header_text};

        position: absolute;
        top: 15px;
        left: 10px;

        span {
          color: ${({ theme }) => theme.colors.footer};
        }
      }

      ul {
        flex-direction: column;

        margin-top: 60px;

        gap: 10px;

        li {
          width: 98%;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        a {
          display: block;

          width: 100%;
          height: 100%;
          padding: 20px;

          color: ${({ theme }) => theme.colors.footer} !important;
        }
      }
    }

    nav.toggle {
      transform: translateX(0);
    }
  }
`;
