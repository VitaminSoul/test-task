import React, { Component } from "react";
import { Card, Button, Image, Loader, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import RatingComponent from "../../../containers/RatingContainer";
import LikesComponent from "../../../containers/LikesContainer";
import CommentsContainer from "../../../containers/CommentsContainer";

export default class myCard extends Component {
  componentDidMount() {
    const { getImg, id } = this.props;
    getImg(id);
  }

  handleAddToCart = () => {
    const { addToCart, id } = this.props;
    addToCart(id);
  };

  render() {
    const { id, price, productName, productDescription, images } = this.props;
    const { imageRdy, productImage } = images.find((o) => o.id === id);
    return (
      <Card link>
        {imageRdy ? (
          <Link to={`/product/${id}`}>
            <Image src={productImage} />
          </Link>
        ) : (
          <Card.Content style={{ height: "290px" }}>
            <Loader active size="large">
              Loading
            </Loader>
          </Card.Content>
        )}

        <Card.Content>
          <Card.Header>{productName}</Card.Header>
          <Card.Meta>
            <h4>
              {price}
              <Icon name="dollar" />
            </h4>
            <RatingComponent id={id} />
            <CommentsContainer id={id} />
            <LikesComponent id={id} />
          </Card.Meta>
          <Card.Meta>{productDescription}</Card.Meta>
        </Card.Content>

        <Card.Content extra textAlign="center">
          <Button
            animated="fade"
            onClick={() => {
              this.handleAddToCart();
            }}
          >
            <Button.Content
              visible
              style={{
                maxWidth: "185px",
                minWidth: "50px",
              }}
            >
              <Icon name="dollar" />
            </Button.Content>
            <Button.Content hidden>
              <Icon name="cart" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
