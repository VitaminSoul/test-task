import React from "react";
import { Icon } from "semantic-ui-react";

export default ({ id, commentsData }) => {
  const { comments } = commentsData.find((o) => o.id === id);
  return (
    <Icon
      name="comments"
      style={{
        display: "inline-block",
        marginRight: "25px",
        textAlign: "center",
      }}
    >
      {comments}
    </Icon>
  );
};
