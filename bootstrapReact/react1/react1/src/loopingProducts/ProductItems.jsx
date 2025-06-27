import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductItems({product_title}) {
  return (
    
    
    <div className='col-lg-3 mb-4 mt-4'>



        <Card style={{ width: '18rem',border:'1px solid black', borderRadius:'10px' }}>
        
            <Card.Body>
                <Card.Title>{product_title.title }</Card.Title>
                <Card.Text>
                    {product_title.body}  
                </Card.Text>
                <Button variant="primary">{product_title.id}</Button>
            </Card.Body>
        </Card>
    </div>
    

    
  );
}

export default ProductItems;