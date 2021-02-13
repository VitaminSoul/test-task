import React, { Component } from "react";
import ProductCard from "../../containers/ProductCard";
import { Card } from "semantic-ui-react";

export default class _ extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.data.map((item) => (
          <ProductCard {...item} />
        ))}
      </Card.Group>
    );
  }
}
