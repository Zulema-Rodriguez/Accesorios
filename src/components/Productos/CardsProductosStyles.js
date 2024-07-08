import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const Image = styled.div`
  background-color: #e0e0e0;
  height: 200px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  color: brown;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: brown;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;