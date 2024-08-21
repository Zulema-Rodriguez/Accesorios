import React from 'react';
import { 
    ContactoContainer, 
    FormContainer, 
    FormField, 
    FormLabel, 
    FormInput, 
    FormTextArea, 
    SubmitButton, 
    TextContainer, 
    CompanyText 
} from './ContactoStyles';

function Contacto() {
    return (
        <ContactoContainer>
            <FormContainer>
                <form>
                    <FormField>
                        <FormLabel>Nombre</FormLabel>
                        <FormInput type="text" placeholder="Nombre" />
                    </FormField>
                    <FormField>
                        <FormLabel>Apellido</FormLabel>
                        <FormInput type="text" placeholder="Apellido" />
                    </FormField>
                    <FormField>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" placeholder="Email" />
                    </FormField>
                    <FormField>
                        <FormLabel>Asunto</FormLabel>
                        <FormTextArea placeholder="Asunto" />
                    </FormField>
                    <SubmitButton type="submit">Enviar</SubmitButton>
                </form>
            </FormContainer>

            <TextContainer>
                <CompanyText>
                    Estamos aquí para ayudarte con cualquier consulta o inquietud que tengas. No dudes en contactarnos, estamos a tu disposición para brindarte la mejor atención posible.
                </CompanyText>
            </TextContainer>
        </ContactoContainer>
    );
}

export default Contacto;