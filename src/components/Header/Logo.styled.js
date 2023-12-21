import styled from "@emotion/styled";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  gap: 10px;
  color: red;
  &:hover {
    color: black;
  }
`;

export const LogoTitle = styled.h3`
  font-size: 24px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  fill: inherit;
`;
