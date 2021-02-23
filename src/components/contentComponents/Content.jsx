import React, { Component } from "react";
import ProductCard from "../../containers/ProductCard";
import { Card } from "semantic-ui-react";

export default class _ extends Component {
  componentDidMount() {
    // console.log("componentDidMount");
    const { fetchData, currentPage } = this.props;
    fetchData(currentPage);
  }

  // shouldComponentUpdate(prevProps) {
  //   console.log("shouldComponentUpdate");
  //   // console.log(prevProps.currentPage !== this.props.currentPage);
  //   return (
  //     prevProps.currentPage !== this.props.currentPage &&
  //     this.props.isReady === true
  //   );
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   const { fetchData, currentPage } = this.props;
  //   fetchData(currentPage);
  // }

  render() {
    const { isReady, data } = this.props;
    // console.log("render");
    return (
      <div>
        {!isReady ? (
          <h1>Loading...</h1>
        ) : (
          <Card.Group itemsPerRow={5}>
            {data.map((item) => (
              <ProductCard {...item} />
            ))}
          </Card.Group>
        )}
      </div>
    );
  }
}
