import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;
