import react, { Component } from 'react';
import { Grid, Segment, Header, Container, List } from 'semantic-ui-react';

export default class _ extends Component {
  render() {
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container style={{
          width: "1620px",
          display: "flex",
          justifyContent: "center"
          }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Lorem ipsum dolor sit </List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit </List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit </List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Lorem ipsum dolor sit amet.</List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit amet.</List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit amet.</List.Item>
                <List.Item as='a'>Lorem ipsum dolor sit amet.</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum consectetur in nihil blanditiis eos quam, recusandae officiis sit voluptate voluptatum earum quod ratione cupiditate dolor?
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    </Segment>

    );
  }
}