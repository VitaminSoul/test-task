import React from "react";
import { Pagination } from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";

export default (props) => {
  let history = useHistory();
  let params = useParams();

  return (
    <Pagination
      onPageChange={(e, { activePage }) => {
        // history.push(`/all/${activePage}`);
        props.setPage(activePage);
      }}
      // boundaryRange={0}
      defaultActivePage={1}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      // siblingRange={1}
      totalPages={10}
      // nextitem={() => {
      //   console.log("hw");
      // }}
    />
  );
};
