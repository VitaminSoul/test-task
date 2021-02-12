import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import faker from "faker";

export default (props) => {
  const { setFilter, filteredBy } = props;
  return (
    <Menu
      vertical
      style={{
        maxWidth: "150px",
      }}
    >
      <Menu.Item
        name="productName"
        active={filteredBy === "productName"}
        onClick={() => {
          setFilter("productName");
        }}
      >
        <Icon name="sort alphabet up" />
        Sort by A-Z
      </Menu.Item>
      <Menu.Item
        name="reversedByAlphabet"
        active={filteredBy === "reversedByAlphabet"}
        onClick={() => {
          setFilter("reversedByAlphabet");
        }}
      >
        <Icon name="sort alphabet down" />
        Sort by Z-A
      </Menu.Item>
      <Menu.Item
        name="likes"
        active={filteredBy === "likes"}
        onClick={() => {
          setFilter("likes");
        }}
      >
        <Icon name="like" />
        Sort by likes
      </Menu.Item>
      <Menu.Item
        name="price"
        active={filteredBy === "price"}
        onClick={() => {
          setFilter("price");
        }}
      >
        <Icon name="dollar sign" />
        Sort by price
      </Menu.Item>

      <Menu.Item
        name="rating"
        active={filteredBy === "rating"}
        onClick={() => {
          setFilter("rating");
        }}
      >
        <Icon name="star" />
        Sort by rating
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>menu in menu</Menu.Header>
        <Menu.Menu>
          <Menu.Item name="" active={false} />
          <Menu.Item></Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};
