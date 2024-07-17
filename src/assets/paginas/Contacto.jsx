import React from 'react';
import {
  ContactContainer,
  FormContainer,
  Form,
  Input,
  TextArea,
  Button,
  InfoContainer,
  Title,
  Description
} from "./contactoStyles";

const Contacto = () => {
  return (
    <ContactContainer>
      <Title>Contáctanos</Title>
      <FormContainer>
        <Form>
          <Input type="text" placeholder="Nombre" />
          <Input type="email" placeholder="E-mail" />
          <TextArea placeholder="Asunto"></TextArea>
          <Button>Enviar</Button>
        </Form>
        <InfoContainer>
          <Description>
            Para cualquier consulta o información adicional, no dude en ponerse en contacto con nosotros.
          </Description>
        </InfoContainer>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contacto