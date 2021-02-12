import React, { Component } from "react";
import ProductCard from "../../containers/ProductCard";
import { Grid, Pagination, Button, GridColumn, Card } from "semantic-ui-react";
{
  /* <Grid columns={4}>
      {
        
      }
      <Grid.Row centered>
        {/* <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      /> */
}
//     <Button content="load more" />
//   </Grid.Row>
// </Grid> */}

export default class _ extends Component {
  componentDidMount() {
    const { ids } = this.props;
  }

  render() {
    const { ids, data } = this.props;
    console.log("data:", data);
    return (
      <Card.Group itemsPerRow={5}>
        {data.map((item) => {
          return <ProductCard {...item} />;
        })}
      </Card.Group>
    );
  }
}
