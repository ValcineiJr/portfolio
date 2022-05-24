import styled from 'styled-components';

export const Container = styled.div`
  padding: 170px 0;

  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 3.6rem;
    font-weight: bold;

    margin-bottom: 50px;
  }

  .grid {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    grid-gap: 20px;
  }

  /* background: red; */
`;
