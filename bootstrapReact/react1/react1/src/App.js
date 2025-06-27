import './App.css';
import ChildrenHeader from './ChildrenHeader';
import Header from './Header';
import ProductItems from './loopingProducts/ProductItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import products from './loopingProducts/blog';
function App() {
  
  return (
    <div className="App">
      
    
      {/* props */}
      <Header name="Jay" email="jay@gmail.com" />

      {/* childern props */}

      <ChildrenHeader>
        <div>This is a childern prop Example using fix Children Keyword</div>
      </ChildrenHeader>

      {/* looping on blog items */}
      <Container >
        <Row>
          
            {products.map((product,index)=>{
              return(
                <ProductItems key={index} product_title={product} />
              );
            })}

        </Row>
    </Container>
      </div>

      
    

  );
}

export default App;
