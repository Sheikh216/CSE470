import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem,Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useParams,useNavigate } from 'react-router-dom';
import { listProductsDetails } from '../actions/productActions';
import axios from 'axios';
import Message from '../components/Message';

import Loader from '../components/Loader';

const ProductScreen = () => {


  // folder 6 

  const [qty,setQty] = useState(0)

  const navigate = useNavigate()

  



 






  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails)
  const {loading,error} = productDetails

  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(listProductsDetails(id));
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [dispatch, id]);

  if (!product) {
    return <div>Product not found</div>;
  }





  
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }



  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? <Loader/>:error?<Message variant='danger'>{error}</Message>: (
        <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: TK{product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>TK{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of stock'}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              {/* Folder 6 */}

              {product.countInStock >0 && (
                <ListGroupItem>
                <Row>
                  <Col>How many</Col>
                  <Col>
                    <Form.Select value={qty} onChange={(e) => setQty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                          {x + 1}
                          </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                </ListGroupItem>
              )}







              <ListGroupItem>
                <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}
      
    </>
  );
};

export default ProductScreen;
