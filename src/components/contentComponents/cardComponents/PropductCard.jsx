import React, { Component } from 'react';
import { Card, Button, Image, Loader, Rating, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// const Loading = () => {
//   return (
//     <Card>
//       <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='big' />
//       <Card.Content>
//         <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//       </Card.Content>
//     </Card>
//   );

// }

export default class myCard extends Component {



  componentDidMount() {
    const { getImg, id } = this.props;
    getImg(id);
  }

  render() {
    const { id, price, rating, likes, addToCart, productName, productDescription, productImage, imageRdy, cart_counter } = this.props;
    return (
        <Card link>
          {
            imageRdy
              ? <Link to={`/product/${id}`} ><Image src={productImage} /></Link>
              : <Card.Content style={{ height: "290px" }}>
                <Loader active size='large'>Loading</Loader>
              </Card.Content>
          }

          <Card.Content>
            <Card.Header>
              {productName}
            </Card.Header>
            <Card.Meta>
              <h4>price: {price}</h4>
              <Rating icon='star' defaultRating={rating} maxRating={5} />
              
            </Card.Meta>
            <Card.Meta>
              <Icon name="like" /> {likes}
            </Card.Meta>
            <Card.Description>
              {productDescription}
            </Card.Description>
          </Card.Content>

          <Card.Content extra textAlign="center">
            <Button animated="fade" onClick={() => {
              addToCart(id);
            }} content={cart_counter}>
              <Button.Content visible>+</Button.Content>
              <Button.Content hidden>
                <Icon name="cart" />
              </Button.Content>
            </Button>
            <Button icon="like" onClick={() => { }} />
          </Card.Content>

        </Card>
    );
  }
}