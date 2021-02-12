import React, { Component } from 'react';
import { Menu, Container, List, Image, Icon, Button, Visibility, Form, Popup, Checkbox, Accordion } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Search from '../../containers/SearchBar';
import ShoppingCart from '../../containers/ShoppingCart';
import SignUp from '../../containers/SignUp';
import WishList from '../../containers/WishList';
import PremiumOffer from '../../containers/PremiumOffer';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'box-shadow 1s ease, padding 1s ease',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  marginBottom: '15px'
}

const fixedMenuStyle = {
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  heigth: '190px'
}

export default class AppMenu extends Component {

  state = {
    menuFixed: false,
    overlayFixed: false,
  }


  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    return (
    
      <div>
        <div style={{height: "25px"}}></div>
        <Visibility
          
          onTopPassed={this.stickTopMenu}
          onTopVisible={this.unStickTopMenu}
          once={false}
        >
        <Menu className="main-menu"
          borderless
          fixed={this.state.menuFixed ? 'top' : undefined}
          style={this.state.menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container style={{width: "1620px"}}>
            <Menu.Item  style={{
              "width": "85px",
              "display": "flex",
              "justifyContent": "flex-end"
            }}>
              <Link to="/">
                <Icon name="truck" size="large" />
              </Link>
            </Menu.Item>

            <Menu.Item style={{ "width": '450px' }}>
              <Search />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                  <Button.Group basic>
                    <ShoppingCart />
                    <WishList />
                    <PremiumOffer />
                  </Button.Group>
                </Menu.Item>
                <Menu.Item>
                  <Button.Group basic>
                    <Popup trigger={<Button content="Log In"/>} on="click">
                      <Form>
                        <Form.Field>
                          <label>First Name</label>
                          <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                          <label>Last Name</label>
                          <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                          <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                      </Form>
                    </Popup>
                    
                    <Button>Sign Up</Button>
                  </Button.Group>
                </Menu.Item>
                {/* <Menu.Item>
            <SignUp />
          </Menu.Item> */}
            </Menu.Menu>
          </Container>
        </Menu>
        </Visibility> 
      </div>
    )
  }
};