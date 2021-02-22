import React, { Component } from "react";
import { Grid, Container, Segment, Pagination } from "semantic-ui-react";
import { Route } from "react-router-dom";
import "./app.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

import Menu from "../containers/Menu";
import Sidebar from "../containers/SideBar";
import Carousel from "./carousel/Carousel";
import ProductPage from "./productPage/ProductPage";
import Footer from "./Footer/Footer";
import Content from "../containers/Content";

export default class App extends Component {
  componentDidMount() {
    this.props.setDataThunk();
  }

  render() {
    const { isReady } = this.props;
    const temp = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
    ];
    return (
      <div>
        <Container
          style={{
            width: "1620px",
          }}
        >
          <Menu />
          <Route path="/" exact>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Segment>
                    <Sidebar />
                  </Segment>
                </Grid.Column>
                <Grid.Column widescreen={14} textAlign="center">
                  <Segment>
                    <Carousel />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column widescreen={14} floated="right">
                  <Segment>{isReady ? <Content ids={temp} /> : null}</Segment>
                </Grid.Column>

                <Grid.Column widescreen={14} floated="right" textAlign="center">
                  <Segment>
                    <Pagination
                      boundaryRange={0}
                      defaultActivePage={1}
                      ellipsisItem={null}
                      firstItem={null}
                      lastItem={null}
                      siblingRange={1}
                      totalPages={10}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row columns={2}>
                
              </Grid.Row> */}
            </Grid>
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Container>
        <Footer />
      </div>
    );
  }
}
