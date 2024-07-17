import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

export const Price = styled.p`
  margin: 5px 0 0;
  color: #999;
`;