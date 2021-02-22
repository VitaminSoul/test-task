import React from "react";
import { Rating } from "semantic-ui-react";

export default ({ id, ratingData }) => {
  const { rating } = ratingData.find((o) => o.id === id);
  return <Rating icon="star" rating={rating} maxRating={5} />;
};
