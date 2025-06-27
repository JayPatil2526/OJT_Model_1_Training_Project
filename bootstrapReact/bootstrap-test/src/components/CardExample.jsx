import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import cardData from '../components/cards';  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardExample() {
  return (
    <Container className="mt-4">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} md={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={card.image} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardExample;

