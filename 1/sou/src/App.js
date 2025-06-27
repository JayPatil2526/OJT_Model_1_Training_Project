import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Container className="mt-5">
      <Alert variant="success">✅ Bootstrap is working!</Alert>
    </Container>
  );
}
