import React, { Component } from "react";
import { Grid, Container, Segment, Pagination } from "semantic-ui-react";
import { Route, Link, Redirect, useHistory } from "react-router-dom";
import "./app.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

import Menu from "../containers/Menu";
import Sidebar from "../containers/SideBar";
import Carousel from "./carousel/Carousel";
import ProductPage from "./productPage/ProductPage";
import Footer from "./Footer/Footer";
import Content from "../containers/Content";
import PaginationComponent from "./contentComponents/Pagination";

export default class App extends Component {
  render() {
    const { isReady, setPage } = this.props;
    return (
      <div>
        <Container
          style={{
            width: "1620px",
          }}
        >
          <Menu />
          <Redirect from="/" to="/all" />
          <Route path="/all" exact>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Segment>
                    <Sidebar />
                  </Segment>
                </Grid.Column>
                <Grid.Column widescreen={14}>
                  <Segment>
                    <Content />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column widescreen={14} floated="right" textAlign="center">
                  <Segment>
                    <PaginationComponent setPage={setPage} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Grid>
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
                  <Segment>
                    <Content />
                  </Segment>
                </Grid.Column>
                <Grid.Column widescreen={14} floated="right" textAlign="center">
                  <Segment>
                    <PaginationComponent setPage={setPage} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/all/:id">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Segment>
                    <Sidebar />
                  </Segment>
                </Grid.Column>
                <Grid.Column widescreen={14} floated="right">
                  <Segment>{isReady ? <Content /> : null}</Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column widescreen={14} floated="right" textAlign="center">
                  <Segment>
                    <PaginationComponent setPage={setPage} />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Route>
        </Container>
        <Footer />
      </div>
    );
  }
}
