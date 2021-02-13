import React, { Component } from "react";
import {
  Rating,
  Menu,
  Grid,
  Image,
  Card,
  Segment,
  Container,
} from "semantic-ui-react";

export default class ProductPage extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <h4>{"Breadcrumbs>Breadcrumbs>Breadcrumbs>Breadcrumbs>"}</h4>
        <h1>PRODUCT NAME</h1>
        <Rating defaultRating={3} maxRating={5} disabled />
        <Menu tabular>
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="reviews"
            active={activeItem === "reviews"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="videos"
            active={activeItem === "videos"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container
                fluid
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image src="https://picsum.photos/500/500" />
              </Container>
            </Grid.Column>
            <Grid.Column>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              odit voluptas natus adipisci corrupti. Numquam, ut quod rerum
              eaque odit libero autem temporibus, totam dolore consequatur neque
              ad voluptates, voluptas error eos corporis maiores possimus ipsam
              velit ullam molestiae sapiente recusandae tempora. Aspernatur quae
              maxime voluptates quod ex illum provident velit temporibus itaque
              veritatis, quibusdam nobis explicabo aut hic fugiat vel culpa,
              recusandae ea ipsum quis impedit mollitia. Dicta hic doloribus
              maiores molestias, sunt similique quas aperiam sit consequatur
              reiciendis dolores iusto. Praesentium mollitia illum rem soluta
              laborum repellat velit vel quo? Molestiae quis, delectus illum
              recusandae, facere sit provident laborum atque at, aut quisquam
              minus. Repellat, unde harum explicabo quasi quia doloribus atque
              earum vitae debitis aut, incidunt aliquid iure fugiat deserunt
              tempore, sapiente natus consequuntur. Voluptatem sit consectetur
              quos, quae eaque expedita dolorem beatae, et quam neque tempora
              necessitatibus a iste ipsam, alias sint laborum explicabo animi
              facilis. Sunt eligendi eos voluptatem unde iusto perferendis
              dignissimos alias in inventore odio aspernatur soluta expedita
              illo quas, ea rerum, voluptates sequi beatae, excepturi
              voluptatibus cupiditate harum at molestias mollitia? Rerum quasi
              modi velit illum distinctio ratione iure molestias voluptas vel
              laudantium, ad repellat voluptate, perferendis aliquid alias ex,
              sint similique enim. Ab itaque doloribus esse tenetur dignissimos
              dicta cupiditate maxime ducimus alias dolore quae ea beatae
              adipisci nesciunt iste ullam, laboriosam facilis fuga dolorem sed
              soluta. Qui earum non explicabo cupiditate modi aperiam placeat
              labore laborum? Culpa aut, veritatis eius, sequi nulla inventore
              repellat autem recusandae eligendi molestiae temporibus illo
              voluptates nemo, aperiam rerum quo modi. Esse, enim harum aperiam
              provident nisi sunt veniam quis, inventore sed, eligendi unde?
              Animi sapiente, ea explicabo fuga est similique consectetur!
              Quibusdam quas minus illo ea velit ipsam voluptatem eveniet veniam
              magni, sed debitis nam, provident consequatur incidunt officiis
              labore laboriosam praesentium rerum nostrum accusamus similique.
              Soluta possimus qui odio iusto, sit, minus modi eligendi
              cupiditate deleniti, vitae animi similique. Minus omnis autem id
              iure enim, dolorem nisi reprehenderit esse quisquam quibusdam
              blanditiis? Soluta, culpa temporibus nihil maiores blanditiis
              doloribus, explicabo cum sapiente illum placeat labore itaque
              praesentium ipsa unde reiciendis, adipisci possimus pariatur?
              Ipsam odio exercitationem voluptatem quod, quae eius itaque,
              laborum libero dolorem neque consectetur nulla temporibus nisi
              omnis placeat enim incidunt corporis hic magnam vero aspernatur
              officia aliquam numquam nihil. Dolor nemo laborum cumque quisquam
              sapiente quam voluptas animi, cupiditate quasi laboriosam aut
              eveniet! Soluta velit commodi nihil totam quisquam beatae tempore
              vitae, minima quas illum rerum. Dignissimos natus ipsam magnam
              unde veritatis recusandae eius, nostrum, error maxime facere
              voluptatibus vel, aliquam perferendis. Corporis, aspernatur autem
              esse doloribus distinctio aliquid itaque at! Similique magni
              debitis eos ad molestiae cumque et impedit placeat quam non ipsam
              obcaecati, voluptatum officia hic praesentium culpa suscipit eius
              architecto nulla iste laudantium ab dolor? Commodi est quisquam,
              sed velit voluptatum voluptatibus. Cumque dignissimos inventore
              distinctio ducimus. Cum non magni impedit modi hic nesciunt
              laudantium libero, natus saepe atque totam quas error sed,
              voluptas provident animi fuga perspiciatis aut. Qui, asperiores
              distinctio. Quasi molestiae officiis nostrum enim.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1>Recomendations</h1>
              <Segment>
                <Card.Group itemsPerRow={10}>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1>Last seen</h1>
              <Segment>
                <Card.Group itemsPerRow={10}>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                  <Card>
                    <Image src="https://picsum.photos/100/100" />
                    <Card.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, accusamus quis
                    </Card.Content>
                  </Card>
                </Card.Group>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
