import React from 'react'
import { Container,  } from './styles';
const Button =({ children, ...props}) => {
  return (
    <Container {...props}> {/* Passa todas as props para o styled-component */}
      {children}
    </Container>
  );
};

export default Button;