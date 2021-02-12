import React, { useState } from 'react';
import { Menu, Label, Input, Icon } from 'semantic-ui-react';

export default (props) => {
  const [activeItem, setActiveItem] = useState('inbox');
  const { price, rating, setFilter } = props;
  return (
    <Menu vertical style={{
      maxWidth: "150px",
    }}>
      <Menu.Item
        name='test_1'
        active={activeItem === 'test_1'}
        onClick={(e, { name }) => {
          setActiveItem(name)
        }}
      >
        <Icon name="sort alphabet up" />
          Sort by A-Z
        </Menu.Item>
      <Menu.Item
        name='test_2'
        active={activeItem === 'test_2'}
        onClick={(e, { name }) => {
          setActiveItem(name)
        }}
      >
        <Icon name="sort alphabet down" />
          Sort by Z-A
        </Menu.Item>
      <Menu.Item
        name='test_3'
        active={activeItem === 'test_3'}
        onClick={(e, { name }) => {
          setActiveItem(name)
        }}
      >
        <Icon name="like" />
          Sort by likes
        </Menu.Item>
      <Menu.Item
        name='test_4'
        active={activeItem === 'test_4'}
        onClick={(e, { name }) => {
          setActiveItem(name);
          setFilter('price');
        }}
      >
        <Icon name="dollar sign" />
          Sort by price
        </Menu.Item>
      <Menu.Item
        name='test_5'
        active={activeItem === 'test_5'}
        onClick={(e, { name }) => {
          setActiveItem(name);

        }}
      >
        <Icon name="star" />
          Sort by rating
        </Menu.Item>
      <Menu.Item>
        <Menu.Header>menu in menu</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name='item_two'
            active={activeItem === 'item_two'}
            onClick={(e, { name }) => {
              setActiveItem(name)
            }}
          />
          <Menu.Item
            name='item_1'
            active={activeItem === 'item_1'}
            onClick={(e, { name }) => {
              setActiveItem(name)
            }}
          />
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
}