import React from 'react'; 
import { Popup, List, Icon, Image, Button, Dropdown } from 'semantic-ui-react';
import { removeFromCart } from '../../../actions/shoppingCart';
import { Link } from 'react-router-dom';

const CartItem = props => {
  const { productName, productDescription, productImage, id, removeFromCart } = props;
  return (
    
    <List.Item style={{ 
      display:"flex",
      justifyContent: "space-between",
      width: "150px"
      }}>
      <Link to={`/product/${id}`} style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90px"
        }}>
      <Image size='mini' verticalAlign='middle' src={productImage} avatar />
      <List.Content>
        <List.Header as='a'>{productName}</List.Header>
        <List.Description as='a'>{productDescription}</List.Description>
      </List.Content>
      </Link>   
      <Button style={{
        backgroundColor: 'white', 
        borderRadius: '7px',
      }} 
        onClick={() => {removeFromCart(id)}} icon="trash"/> 
    </List.Item>
  )
}

const test = (id) => {
  console.log(id);
}



export default props => {
  const { cartItems, data, removeFromCart } = props;
  const cardData = cartItems.map(i => ({
    ...data.find(o => o.id === i.id)
  }));

  return (
    <Popup trigger={<Button icon="cart" />} on="click">
        <Popup.Header>
          <h5>Shopping cart yay</h5>
        </Popup.Header>
        <List divided relaxed>
          {cardData.map((o, i) => {
            return <CartItem key={i} {...o} removeFromCart={removeFromCart} />
          })}
        </List>
      </Popup>

  );
}