import styled from 'styled-components';

export const ContactoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: black;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 100px;
`;

export const SubmitButton = styled.button`
  background-color: brown;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkorange;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: #f5f5dc;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const CompanyText = styled.p`
  font-size: 16px;
  color: black;
`;