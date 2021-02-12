import React from "react";
import {
  Popup,
  List,
  Icon,
  Image,
  Button,
  Dropdown,
  Segment,
  Item,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const {
    productName,
    productDescription,
    productImage,
    id,
    removeFromCart,
    price,
  } = props;
  return (
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src={productImage} circular />
        <Item.Content>
          <Item.Header>{productName}</Item.Header>
          <Item.Meta>
            <span className="price">{price}</span>
          </Item.Meta>
          <Item.Extra>
            <Button
              style={{
                width: "100px",
                borderRadius: "7px",
                backgroundColor: "rgb(199, 24, 24)",
                color: "white",
              }}
              icon="trash"
              onClick={() => {
                removeFromCart(id);
              }}
            ></Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
{
  /* <List.Item style={{ width: "350px" }}>
  <List.Content>
    <Image size="mini" verticalAlign="middle" src={productImage} avatar />
    <List.Header as="a">{productName}</List.Header>
    <List.Description as="a">{productDescription}</List.Description>
    <Button
      style={{
        backgroundColor: "white",
        borderRadius: "7px",
      }}
      onClick={() => {
        removeFromCart(id);
      }}
      icon="trash"
    />
  </List.Content>
</List.Item>; */
}
export default (props) => {
  const { cartItems, data, removeFromCart } = props;
  const cardData = cartItems.map((i) => ({
    ...data.find((o) => o.id === i.id),
  }));

  return (
    <Popup trigger={<Button icon="cart" />} on="click">
      <Popup.Header>
        <h5>Shopping cart yay</h5>
      </Popup.Header>
      <List divided relaxed>
        {cardData.map((o, i) => {
          return <CartItem key={i} {...o} removeFromCart={removeFromCart} />;
        })}
      </List>
    </Popup>
  );
};
