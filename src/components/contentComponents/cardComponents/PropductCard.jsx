import React, { Component } from "react";
import { Card, Button, Image, Loader, Rating, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class myCard extends Component {
  constructor() {
    super();
    this.state = {
      like: null,
      isLiked: false,
      color: "grey",
      rate: null,
    };
  }

  componentDidMount() {
    const { getImg, id, likes } = this.props;
    this.setState({
      like: likes,
    });
    getImg(id);
  }

  componentDidUpdate() {
    // const { likes, rating } = this.props;
    // this.setState({
    //   like: likes,
    //   rate: rating,
    // });
  }

  shouldComponentUpdate(nextProps) {
    const { rating, likes } = this.props;
    return rating !== nextProps.rating || likes !== nextProps.likes
      ? true
      : false;
  }

  render() {
    const {
      id,
      price,
      rating,
      likes,
      addToCart,
      productName,
      productDescription,
      productImage,
      imageRdy,
      cart_counter,
      comments,
    } = this.props;
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
            <Rating
              icon="star"
              defaultRating={0}
              rating={rating}
              maxRating={5}
            />
            <Icon name="comment" /> {comments}{" "}
            <Icon
              name="like"
              color={this.state.color}
              onClick={() => {
                !this.state.isLiked
                  ? this.setState({
                      like: this.state.like + 1,
                      color: "red",
                      isLiked: true,
                    })
                  : this.setState({
                      like: this.state.like - 1,
                      color: "grey",
                      isLiked: false,
                    });
              }}
            />{" "}
            {likes}
          </Card.Meta>
          <Card.Meta>{productDescription}</Card.Meta>
        </Card.Content>

        <Card.Content extra textAlign="center">
          <Button
            animated="fade"
            onClick={() => {
              addToCart(id);
            }}
            content={cart_counter}
          >
            <Button.Content
              visible
              fluid
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
