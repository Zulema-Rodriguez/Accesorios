import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #000;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #654321;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  
  &:hover {
    background-color: #432109;
  }
`;

export const InfoContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #000;
  text-align: center;
`;