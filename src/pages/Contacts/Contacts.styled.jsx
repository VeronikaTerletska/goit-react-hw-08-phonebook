import styled from '@emotion/styled';

export const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 40px;
  color: #010101;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
