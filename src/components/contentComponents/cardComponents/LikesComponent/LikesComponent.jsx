import React from "react";
import { Icon } from "semantic-ui-react";

{
  /* <Icon
  name="like"
  color={this.state.color}
  onClick={() => {
    !this.state.isLiked
      ? this.setState({
          like: this.state.like + 1,
          color: "red",
          isLiked: true,
        })
      : this.setState({
          like: this.state.like - 1,
          color: "grey",
          isLiked: false,
        });
  }}
/>; */
}

export default ({ id, likesData, hitLike, hitDislike }) => {
  const { likes, liked } = likesData.find((o) => o.id === id);
  return (
    <Icon
      name="like"
      color={!liked ? null : "red"}
      onClick={() => {
        console.log(liked);
        !liked ? hitLike(id) : hitDislike(id);
      }}
    >
      {likes}
    </Icon>
  );
};
