import styled from 'styled-components';

export const NosotrosContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 50px 20px;

    @media screen and (max-Width: 768) {
      padding: 30px 10px;
    }
`;

export const NosotrosContent = styled.div`
  max-width: 800px;
  text-align: center;
`;

export const NosotrosTitle = styled.h2`
  font-size: 2,5rem;
  color: brown;
  margin-bottom: 20px;
   
   @media screen and (max-width: 768px) {
     font-size: 2rem;
   }
`;

export const NosotrosText = styled.p`
  font-size: 1.2rem;
  color: brown;
  line-height: 1.6;

   @media creen and (max-width: 768) {
     font-size: 1rem;
   }
`