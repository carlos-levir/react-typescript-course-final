import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;
