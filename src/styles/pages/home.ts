import styled from 'styled-components';

export const Container = styled.main`
  @keyframes showIn {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  overflow-x: hidden;
  z-index: 10;
  padding-top: 200px;
  background-color: ${({ theme }) => theme.colors.background};

  section.intro {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    margin-bottom: 200px;

    text-align: center;

    animation-name: showIn;
    animation-duration: 1s;

    h1 {
      font-size: 7rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.header_text};

      margin-bottom: 25px;
    }

    p {
      font-size: 2.1rem;
      color: ${({ theme }) => theme.colors.simple_text};

      margin-bottom: 20px;
    }

    p.rating-text {
      font-size: 1.7rem;
    }

    h6 {
      font-size: 1.5rem;
      font-family: 'Karla';
      color: ${({ theme }) => theme.colors.simple_text};
      text-transform: uppercase;
      letter-spacing: 0.6rem;

      margin-bottom: 25px;
    }
  }

  section.features {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;

    width: 90%;
    max-width: 1400px;
    margin: 0 auto;

    margin-bottom: 100px;

    .box {
      display: flex;
      gap: 15px;

      .info {
        max-width: 200px;
      }
    }

    .title {
      font-size: 2.1rem;
      color: ${({ theme }) => theme.colors.header_text};

      margin-bottom: 10px;
    }

    p {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.simple_text};
    }
  }

  section.show-case {
    background-color: ${({ theme }) => theme.colors.primary};

    min-height: 820px;

    padding-bottom: 80px;

    display: flex;

    .wrapper {
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;

      min-height: 100%;

      display: flex;

      align-items: center;
      gap: 80px;
      color: #fff;

      @media (max-width: 1000px) {
        flex-direction: column;

        .information {
          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: center;
          text-align: center !important;
        }
      }
    }

    .image {
      width: 100%;
      width: 100%;
      transition: all 0.4s;

      display: flex;
      justify-content: center;

      img {
        width: 100% !important;
        width: 100%;
      }
    }

    h6 {
      font-size: 1.5rem;

      text-transform: uppercase;
      letter-spacing: 0.4rem;
      margin-bottom: 30px;
    }

    h2 {
      font-size: 4.8rem;
      margin-bottom: 30px;
    }

    p {
      font-size: 1.8rem;
      color: #e4e4e4;
    }

    button,
    a {
      padding: 0 20px;
      height: 60px;
      background: #ffffff;
      border-radius: 5px;
      font-family: 'Karla';
      font-style: normal;
      font-weight: bold;
      font-size: 1.8rem;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.9px;
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 10px;
    }
  }

  section.feedbacks {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    flex: 1;
    gap: 40px;
    display: flex;
    align-items: center;

    padding: 13rem 0;

    @media (max-width: 1069px) {
      flex-direction: column;
    }

    .description {
      flex: 1;

      a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2rem;
      }
      h6 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: 0.4rem;

        margin-bottom: 40px;
      }
      h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.colors.header_text};

        margin-bottom: 20px;
      }
      p {
        margin-bottom: 30px;

        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.simple_text};
      }
    }

    .grid {
      display: grid;
      flex: 2;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      /* @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
      } */

      grid-gap: 0 20px;

      /* background-color: red; */
    }
  }
`;

export const CardBody = styled.div`
  /* background-color: green; */

  .image {
    width: 100%;
    height: 100%;
    padding-top: 56.25%; /* 16:9 */

    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }

  .image img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slide {
    flex: 1;

    height: 250px;

    transition: 0.5s;
  }

  .slide.slide1 {
    position: relative;

    display: flex;

    justify-content: center;

    align-items: center;

    z-index: 1;

    transition: 0.7s;

    transform: translateY(50%);

    background-color: ${({ theme }) => theme.colors.background};
  }

  &:hover .slide.slide1 {
    transform: translateY(0);
  }

  .slide.slide2 {
    position: relative;

    display: flex;

    padding: 40px;

    box-sizing: border-box;

    transition: 0.8s;

    transform: translateY(-50%);

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

    overflow-x: hidden;

    .link {
      display: flex;
      flex-wrap: wrap;

      margin-top: 30px;

      span {
        margin-right: 8px;
      }

      span,
      a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.header_text};
      }

      a {
        text-decoration: underline;
      }
    }

    h3 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.header_text};

      margin-bottom: 1rem;
    }

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.simple_text};
    }
  }

  &:hover .slide.slide2 {
    transform: translateY(0);
  }
`;
