import styled from '@emotion/styled';

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding: 12px 14px;
  background: lightgreen;
  @media (min-width: 480px) {
    padding: 12px 20px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 480px) {
    max-width: 1200px;
  }
`;
