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

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  max-width: 80%;
  width: 20rem;
  height: 2.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  border: 0;
  max-width: 80%;
  width: 20rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;
